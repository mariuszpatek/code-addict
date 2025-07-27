+++
title = "Model Context Protocol in .NET"
date = 2025-07-27T00:00:00+02:00
draft = false
+++

> MCP standardizes how applications provide context to LLMs.

**Model Context Protocol (MCP)**: Think of MCP as a standardized way for apps to give Large Language Models (LLMs) the right information they need to do their job well. It's like giving a chef all the specific ingredients and instructions they need to cook a particular dish.

To understand MCP, it helps to compare it to REST. While REST is excellent for *fetching* data, MCP is designed for *providing context*. Think of REST as asking *what* data exists, while MCP focuses on *how* to give an LLM the necessary information to understand a request and respond appropriately.

## MCP in .NET

In world of .NET we are able to leverage the power of MCP through a dedicated SDK, making implementation straightforward and efficient. Building your own MCP server becomes a simple task using the [.NET SDK](https://github.com/modelcontextprotocol/csharp-sdk).

We just need to install the package:

```bash
dotnet add package ModelContextProtocol --prerelease
```

In console applications, we also need to install the hosting package to properly set up the service infrastructure:

```bash
dotnet add package Microsoft.Extensions.Hosting
```

Then we can create a simple server:

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

var builder = Host.CreateApplicationBuilder(args);
builder.Logging.AddConsole(consoleLogOptions =>
{
    consoleLogOptions.LogToStandardErrorThreshold = LogLevel.Trace;
});

builder.Services
    .AddMcpServer()
    .WithStdioServerTransport()
    .WithToolsFromAssembly();

await builder.Build().RunAsync();
```

### Understanding MCP Configuration

`WithStdioServerTransport()` configures the server to communicate through standard input and output (stdin/stdout). This is useful when the MCP server is launched locally by a client process. The server operates as a single-session service and terminates when the stdin stream is closed.

`WithToolsFromAssembly()` scans our code for classes with the `McpServerToolType` attribute and registers methods marked with the `McpServerTool` attribute.

### MCP Tools Examples

Let's look at a practical example of an MCP tool - a simple shopping cart manager:

```csharp
[McpServerToolType]
public sealed class ShoppingCartTool
{
    private static readonly List<string> Cart = new();
    
    [McpServerTool, Description("Adds an item to the shopping cart.")]
    public string AddItem([Description("The item to add to the cart")] string item)
    {
        Cart.Add(item);
        Console.WriteLine($"Added to cart: {item}");
        return $"Added '{item}' to your shopping cart.";
    }
    
    [McpServerTool, Description("Gets all items in the shopping cart.")]
    public string GetCartItems()
    {
        if (Cart.Count == 0)
        {
            return "Your shopping cart is empty.";
        }

        return $"Your shopping cart contains: {string.Join(", ", Cart)}.";
    }
}
```

This example demonstrates a simple tool that manages a shopping cart. The class is marked with `McpServerToolType` attribute, which registers it with the MCP server. Each method is decorated with the `McpServerTool` attribute, making it available for LLMs to use.

The `Description` attributes provide documentation that helps the LLM understand the purpose of each method and parameter. When the LLM needs to interact with a shopping cart, it can leverage these methods to add items or check the cart's contents, providing a natural and intuitive way for users to manage their shopping through language.

## Visual Studio Code Configuration

To use your MCP server with Visual Studio Code, you need to configure it properly. This involves creating a configuration file that tells VS Code how to connect to your MCP server.

![VS Code MCP Configuration](/code-addict/post-plugins/vscode-mcp-config.png)

You need to create a new file in the `.vscode` folder named `mcp.json` with the following structure:

```json
{
  "inputs": [],
  "servers": {
    "ExampleMCP": {
      "type": "stdio",
      "command": "dotnet",
      "args": [
        "run",
        "--project",
        "C:\\Users\\MCPExample\\MCPExample\\MCPExample.csproj"
      ]
    }
  }
}
```

This configuration tells VS Code:
- **inputs**: An array of input configurations (empty in this case)
- **servers**: An object containing your MCP server definitions
- **ExampleMCP**: The name of your MCP server (you can choose any name)
- **type**: Set to "stdio" for standard input/output communication
- **command**: The executable to run (in this case, "dotnet")
- **args**: Arguments passed to the command, including the path to your MCP project

Once you've created this configuration file, you're ready to use your MCP tool directly within Visual Studio Code. The editor will automatically detect and connect to your MCP server, making your custom tools available for use with AI assistants and other MCP-compatible features.

## Using MCP in VS Code Agent Mode

To interact with your MCP server, you need to enable **Agent Mode** in Visual Studio Code. Agent mode allows the AI assistant to access and utilize your custom MCP tools during conversations.

When you activate agent mode and click on the **Tools** section, you'll be able to see your custom MCP server listed among the available tools. This provides a seamless integration where the AI can leverage your custom functionality to help with various tasks.

![MCP Server Usage Demonstration](/code-addict/post-plugins/vscode-mcp-usage-1.png)

![MCP Server Usage Demonstration](/code-addict/post-plugins/vscode-mcp-usage-2.png)

The demonstration above shows how the MCP server integrates with VS Code's agent mode. You can see the custom shopping cart tools being recognized and used by the AI assistant, providing a natural way to interact with your MCP-powered functionality through conversation.

One of the powerful features of this integration is the ability to see both the **input** that was sent to your MCP server and the **output** it returned. This transparency makes debugging your MCP tools incredibly easy - you can track exactly what parameters were passed to your methods and verify that the responses are what you expected. This visibility is invaluable when developing and troubleshooting your custom MCP functionality.

## Summary

Model Context Protocol is a powerful functionality that enables us to make everything we can code work with our Copilot, which greatly increases the possibilities of usage of Copilots and chats. By creating custom MCP servers, we can extend AI assistants with any functionality we can imagine and implement, making them truly versatile tools that can interact with our specific business logic, APIs, databases, or any other systems we work with.

## Resources

*   [Model Context Protocol Introduction](https://modelcontextprotocol.io/introduction)
*   [.NET SDK](https://github.com/modelcontextprotocol/csharp-sdk)
