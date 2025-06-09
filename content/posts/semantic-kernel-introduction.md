+++
date = '2025-06-09T10:00:00+02:00'
draft = false
title = "Getting Started with Semantic Kernel: Microsoft's Open Source AI Library for .NET"
description = "An introduction to Semantic Kernel, Microsoft's open-source library that simplifies AI integration in .NET applications with support for multiple AI models and complex workflows"
author = 'Code Addict'
tags = ['semantic-kernel', '.net', 'ai', 'microsoft', 'chatbot', 'openai', 'azure']
categories = ['tutorials']
+++

If you're a .NET developer looking to integrate AI into your applications, **Semantic Kernel** might be exactly what you need. This open-source library from Microsoft provides a simple yet powerful way to work with different AI models in the .NET ecosystem.

<!--more-->

## What is Semantic Kernel?

Semantic Kernel is an open-source library created by Microsoft that enables .NET developers to integrate their applications with various AI models in a simple, unified way. It provides an abstraction layer that lets you work with different model providers without getting locked into a specific vendor.

Whether you want to create a simple chatbot application or build complex multi-agent workflows, Semantic Kernel has you covered. Best of all, it's production-ready and actively maintained by Microsoft.

## Key Capabilities

Semantic Kernel supports a wide variety of AI operations:

- **Chat Completion** - Build conversational AI applications
- **Text Generation** - Generate human-like text content
- **Embedding Generation** - Create vector representations of text
- **Text to Image** - Generate images from text descriptions
- **Image to Text** - Extract text and descriptions from images
- **Text to Audio** - Convert text to speech
- **Audio to Text** - Transcribe speech to text

## Supported AI Models

One of the biggest advantages of Semantic Kernel is its support for multiple AI providers:

- **OpenAI**
- **Azure OpenAI**
- **Hugging Face**
- **NVIDIA**
- And many more providers

This flexibility means you can switch between providers or use multiple providers in the same application without major code changes.

## Core Components

Semantic Kernel is built around three main components:

### Kernel
The **kernel** is the central orchestration component that manages all services and plugins. Think of it as the brain of your AI application - it coordinates between different AI services and handles the execution flow.

Getting started with Semantic Kernel is straightforward - you can create a kernel using the builder pattern:

```csharp
// Simple kernel creation
var kernel = Kernel.CreateBuilder().Build();
```

### Services
**Services** consist of both AI services and other supporting services necessary to run your application. This follows the Service Provider pattern in .NET, enabling dependency injection across all languages.

Here's how you can add different types of services:

```csharp
// Add AI services
kernelBuilder.Services.AddOpenAIChatCompletion(model, apiKey);

// Add supporting services
kernelBuilder.Services.AddLogging();
```

**AI Services:**
- Chat completion models for conversations
- Image generation services
- Text embedding services
- Audio processing services

**Supporting Services:**
- Logging services for monitoring and debugging
- HTTP clients for external API communication
- Other utilities for application support

### Plugins
**Plugins** are additional components that allow the kernel to perform specific tasks beyond just calling AI models. These components are used by AI services and prompt templates to perform work. They give AI models the ability to work with real-time data and current information, not just the data they were trained on.

Here's how you can add plugins to your kernel:

```csharp
kernelBuilder.Plugins.AddFromType<TimePlugin>();
```

We can also create our own custom plugins, but for now we'll use built-in ones for simplicity.

Plugins can help with:
- Retrieving data from external databases
- Calling external APIs to perform actions
- Interacting with your application's business logic
- Connecting to various services and systems

### Complete Example

Here's a full example that combines services and plugins:

**Required NuGet Packages:**
```
Microsoft.SemanticKernel
Microsoft.Extensions.Logging
Microsoft.Extensions.Logging.Console
Microsoft.SemanticKernel.Plugins.Core
```

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
using Microsoft.SemanticKernel.Connectors.OpenAI;
using Microsoft.SemanticKernel.Plugins.Core;

var kernelBuilder = Kernel.CreateBuilder();

// Add AI services
// Model e.g. "gpt-4.1-mini"
// ApiKey you can get here: https://platform.openai.com/api-keys
kernelBuilder.Services.AddOpenAIChatCompletion(Model, ApiKey);

// Add logging services
kernelBuilder.Services.AddLogging();

// Add built-in plugins
// Normally when you ask a model to tell you the time, it will say it doesn't know or hallucinate an answer. Now it will use the plugin to get the current time.
kernelBuilder.Plugins.AddFromType<TimePlugin>();

var kernel = kernelBuilder.Build();
var chatCompletionService = kernel.GetRequiredService<IChatCompletionService>();

// Enable automatic function calling
// This allows the AI model to automatically choose and invoke available functions from plugins
OpenAIPromptExecutionSettings openAIPromptExecutionSettings = new() 
{
    FunctionChoiceBehavior = FunctionChoiceBehavior.Auto()
};

var history = new ChatHistory();
// Define the AI assistant's role and capabilities
history.AddSystemMessage("You are a helpful assistant that can answer questions about the time.");
// Ask a question that will trigger the TimePlugin
history.AddUserMessage("What time is it now?");

var result = await chatCompletionService.GetChatMessageContentAsync(
    history,
    executionSettings: openAIPromptExecutionSettings,
    kernel: kernel
);

// Response: The current time is 14:22 on Monday, 09 June 2025.
var response = result.Content;
```

This example demonstrates the power of Semantic Kernel's function calling capabilities - the AI automatically uses the TimePlugin to get the current time when asked. In future posts, I'll dive deeper into each of these concepts and show you how to build more complex applications.

## What's Next?

I will dive deeper into Semantic Kernel and explain the mentioned concepts in more detail.

## Sources

- [Microsoft Learn - Semantic Kernel Overview](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
- [Microsoft Learn - Semantic Kernel Concepts](https://learn.microsoft.com/en-us/semantic-kernel/concepts/kernel?pivots=programming-language-csharp)
- [Pluralsight - Semantic Kernel with C#: Building AI Applications](https://www.pluralsight.com/courses/semantic-kernel-c-sharp-building-ai-applications)
- [GitHub - Microsoft Semantic Kernel](https://github.com/microsoft/semantic-kernel)

---

*Have you tried Semantic Kernel in your projects? I'd love to hear about your experiences in the comments!*
