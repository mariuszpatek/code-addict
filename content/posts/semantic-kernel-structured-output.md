+++
date = '2025-07-01T10:00:00+02:00'
draft = false
title = "Structured Output in Semantic Kernel"
description = "Learn how to get structured, predictable responses from AI models using Semantic Kernel's built-in support for typed outputs, ensuring your applications receive consistent data formats"
author = 'Code Addict'
tags = ['semantic-kernel', '.net', 'ai', 'structured-output', 'json', 'openai', 'response-format']
categories = ['tutorials']
+++

When working with AI models, one of the biggest challenges developers face is getting consistent, structured responses. Without proper constraints, AI models often return free-form text that's difficult to parse and integrate into applications. Fortunately, **Semantic Kernel** provides excellent support for structured output that ensures your AI responses are predictable and type-safe.

## The Problem with Unstructured Responses 😤

Imagine asking an AI model: *"Give me a list of items to take for a beach vacation"*

Without structured output, you might get responses like:
- `"Here are some items: sunscreen, towel, flip-flops, water bottle..."`
- `"For a beach vacation, I recommend bringing: 1. Sunscreen 2. Beach towel..."`
- `"You'll need sunscreen (SPF 30+), a beach towel, flip-flops, and water"`

Each response has a different format, making it nearly impossible to programmatically extract and use the data in your application.

## Enter Structured Output 🎯

Structured output in Semantic Kernel allows you to define the exact format you want the AI to return. Instead of free-form text, you get consistently formatted JSON that deserializes directly into your C# objects.

## Defining Your Response Model 📋

First, let's create a simple model that represents the structure we want:

```csharp
public class SuggestionResponse
{
    public string Place { get; init; } = string.Empty;
    public List<string> Items { get; init; } = new();
}
```

This model defines exactly what we expect: a place name and a list of suggested items. The `init` accessors make the properties immutable after construction, which is perfect for response objects.

## Implementing Structured Output 🔧

Here's how to use structured output in your Semantic Kernel implementation:

```csharp
var executionSettings = new OpenAIPromptExecutionSettings
{
    ResponseFormat = typeof(SuggestionResponse)
};

var result = await _kernel.InvokePromptAsync(
    $"Give me a list of items to take for {request.Place}", 
    arguments: new KernelArguments(executionSettings), 
    cancellationToken: cancellationToken
);

var items = JsonSerializer.Deserialize<SuggestionResponse>(result.ToString());

return items ?? new SuggestionResponse();
```

## Breaking Down the Implementation 🔍

Let's examine each part of this implementation:

### 1. Execution Settings Configuration
```csharp
var executionSettings = new OpenAIPromptExecutionSettings
{
    ResponseFormat = typeof(SuggestionResponse)
};
```

The `ResponseFormat` property tells the AI model exactly what structure to return. This leverages OpenAI's **structured output** feature, which ensures the response will always match your specified schema.

### 2. Kernel Invocation
```csharp
var result = await _kernel.InvokePromptAsync(
    $"Give me a list of items to take for {request.Place}", 
    arguments: new KernelArguments(executionSettings), 
    cancellationToken: cancellationToken
);
```

The prompt is simple and natural - we don't need to include instructions about JSON formatting because the `ResponseFormat` handles that automatically.

### 3. Deserialization
```csharp
var items = JsonSerializer.Deserialize<SuggestionResponse>(result.ToString());
return items ?? new SuggestionResponse();
```

Since we're guaranteed a valid JSON structure, deserialization is straightforward. The null-coalescing operator provides a safe fallback.

## Expected Output Format 📄

With structured output, our AI will consistently return responses like this:

```json
{
  "place": "beach vacation",
  "items": [
    "Sunscreen (SPF 30+)",
    "Beach towel",
    "Flip-flops or sandals",
    "Water bottle",
    "Sunglasses",
    "Beach umbrella",
    "Swimwear",
    "Beach bag",
    "Snacks",
    "Portable phone charger"
  ]
}
```

---

*Want to see more Semantic Kernel tutorials? Check out my [previous posts on Semantic Kernel basics](../semantic-kernel-introduction/) and [plugin development](../semantic-kernel-plugins-deep-dive/).*
