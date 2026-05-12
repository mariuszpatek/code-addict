+++
title = 'Privacy Policy — Inflect'
date = '2026-04-24'
draft = false
noComment = true
+++

_Inflect app — Effective date: April 24, 2026 | Last updated: April 24, 2026_

---

## 1. Data Controller

The data controller for your personal data is:

**Mariusz Pątek**  
E-mail: [patek.android@gmail.com](mailto:patek.android@gmail.com)

For all privacy-related inquiries, please contact us at the e-mail address above.

## 2. Data We Collect

### 2.1 Account Data

When you sign in with **Google Sign-In**, we receive from Google:

- e-mail address,
- unique Google account identifier (Google ID),
- display name,
- profile picture URL.

### 2.2 User-Submitted Content

Text you type or paste into the app for rewriting (messages, e-mails, SMS, etc.). This content is forwarded to external large language models (LLMs) solely to provide the Service. It may include personal data of third parties — please do not submit others' personal data without their knowledge.

### 2.3 Style Profile (Persona)

Pro plan users may voluntarily provide sample texts from which the system builds a personal writing-style profile stored on our servers. The profile contains statistical metrics and linguistic observations, not the raw message content (the sample is deleted after extraction or optionally retained for future re-extraction).

### 2.4 Usage Data

We collect anonymous and pseudonymous analytics data, including:

- number and type of operations performed (rewrites, tone analysis, variants),
- screens and features you interact with,
- analytics events (e.g. "onboarding completed", "paywall opened").

### 2.5 Technical and Diagnostic Data

- application error logs (stack trace, device type, OS version, app version),
- IP address (logged server-side for security and rate-limiting),
- device identifiers (for analytics within platform-permitted bounds).

### 2.6 Subscription Status

- subscription plan (Free / Pro) and expiry date,
- RevenueCat customer ID,
- Google Play purchase token (stored by RevenueCat / Google, not directly by us).

### 2.7 Audio Data (Speech / Microphone)

If you use the dictation feature, audio is processed **exclusively on-device** using the system API (Google Speech-to-Text / Apple Speech). **No audio recordings are transmitted to our servers.** The microphone permission (`RECORD_AUDIO`) is used solely for speech-to-text transcription within the app.

## 3. Purposes and Legal Bases for Processing

| Purpose | Legal basis (GDPR) |
|---|---|
| Providing the Service (registration, authentication, rewriting, history) | Art. 6(1)(b) — performance of a contract |
| Managing Pro subscriptions (payments, activation, renewal) | Art. 6(1)(b) — performance of a contract |
| Security, abuse prevention, content moderation, rate-limiting | Art. 6(1)(f) — legitimate interests |
| Product analytics (improving UX, feature metrics) | Art. 6(1)(f) — legitimate interests |
| Error diagnostics (Sentry) | Art. 6(1)(f) — legitimate interests |
| Compliance with legal obligations (e.g. tax, consumer complaints) | Art. 6(1)(c) — legal obligation |

## 4. Recipients — Sub-processors

Your data may be processed by the following sub-processors:

| Entity | Role | Server location | Privacy policy |
|---|---|---|---|
| **Supabase Inc.** | Database, authentication, Edge Functions | AWS eu-west-1 (Ireland) | [supabase.com/privacy](https://supabase.com/privacy) |
| **OpenRouter Inc.** | LLM API gateway | USA | [openrouter.ai/privacy](https://openrouter.ai/privacy) |
| **Anthropic PBC** | Claude language model (rewriting) | USA | [anthropic.com/privacy](https://www.anthropic.com/privacy) |
| **Google LLC** | Gemini model, Google Sign-In, Google Play Billing | USA / EU | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **OpenAI LLC** | GPT language model (rewriting, fallback) | USA | [openai.com/privacy](https://openai.com/privacy) |
| **Functional Software, Inc. (Sentry)** | Error monitoring | USA | [sentry.io/privacy](https://sentry.io/privacy) |
| **PostHog, Inc.** | Product analytics | USA / EU | [posthog.com/privacy](https://posthog.com/privacy) |
| **RevenueCat, Inc.** | In-app subscription management | USA | [revenuecat.com/privacy](https://www.revenuecat.com/privacy) |
| **Apple Inc.** | App Store payments (iOS) | USA | [apple.com/privacy](https://www.apple.com/privacy) |

### Content Processed by LLMs

The message text you submit for rewriting is sent to language models via OpenRouter (Anthropic Claude, Google Gemini, OpenAI GPT). This data is processed solely to fulfil your request and is not permanently stored by us after the model returns a response (except for anonymised logs used for security and moderation).

## 5. International Data Transfers

Some sub-processors (OpenRouter, Anthropic, OpenAI, Sentry, RevenueCat, PostHog, Google) are based in or process data in the United States. These transfers are safeguarded by Standard Contractual Clauses (SCCs) and/or the EU–US Data Privacy Framework (DPF).

## 6. Data Retention

| Category | Retention period |
|---|---|
| Account data and session history | Until account deletion + 30 days (backups) |
| Style profile (Persona) | Until deleted by the user or upon account deletion |
| Error logs (Sentry) | 90 days |
| Analytics data (PostHog) | Up to 24 months (anonymised after 12 months) |
| Subscription data | Up to 7 years from the transaction (tax/accounting requirements) |
| Audio data | Not stored — processed locally and discarded immediately |

## 7. Your Rights

Under the GDPR you have the following rights:

- **Right of access** — you may request a copy of your personal data.
- **Right to rectification** — you may request correction of inaccurate data.
- **Right to erasure** ("right to be forgotten") — you may request deletion of your data (subject to legal obligations).
- **Right to restriction of processing.**
- **Right to data portability.**
- **Right to object** — to processing based on legitimate interests.
- **Right to lodge a complaint** — with the Polish supervisory authority: Prezes Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00-193 Warsaw, Poland, [uodo.gov.pl](https://uodo.gov.pl).

To exercise any of these rights, send an e-mail to [patek.android@gmail.com](mailto:patek.android@gmail.com). We will respond within 30 days.

## 8. Security

- TLS 1.2+ encryption for all data in transit,
- Row-Level Security (RLS) in the Supabase database — users can access only their own data,
- data at rest encrypted (AES-256) by Supabase/AWS,
- JWT-based authentication with short token expiry,
- content moderation before data is passed to LLMs,
- rate-limiting and abuse monitoring.

## 9. Children's Privacy

The Service is not intended for individuals under **16 years of age**. We do not knowingly collect personal data from children below this age.

## 10. Analytics Identifiers

The app uses analytics identifiers (e.g. anonymous IDs in PostHog) assigned to a device or session. You may request deletion of your analytics data by e-mailing the administrator.

## 11. Changes to This Policy

We will notify you of material changes at least **14 days before** they take effect, via an in-app notification or e-mail. Continued use of the Service after that date constitutes acceptance.

## 12. Contact

**Mariusz Pątek**  
E-mail: [patek.android@gmail.com](mailto:patek.android@gmail.com)

---

_This Privacy Policy is effective as of April 24, 2026._
