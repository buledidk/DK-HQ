/**
 * Anthropic (Claude) API Client
 * AI-powered risk assessment and audit procedure generation
 */

const BASE_URL = 'https://api.anthropic.com/v1';
const DEFAULT_MODEL = 'claude-opus-4-6';

export class AnthropicClient {
  constructor(apiKey) {
    if (!apiKey) throw new Error('Anthropic API key is required');
    this.apiKey = apiKey;
  }

  async messages({ model = DEFAULT_MODEL, messages, maxTokens = 4096, system }) {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: 'POST',
      headers: {
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        system,
        messages,
      }),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error: ${response.status} - ${error}`);
    }
    return response.json();
  }

  async assessRisk(clientData) {
    return this.messages({
      system:
        'You are an expert UK auditor. Analyze the client data and identify key audit risks per ISA (UK) 315.',
      messages: [
        {
          role: 'user',
          content: `Assess audit risks for: ${JSON.stringify(clientData)}`,
        },
      ],
    });
  }
}
