## Ascenda

I was pivoting from my frontend position to learn backend by doing rather than just watching.

During my stint in Ascenda, the focus was largely on business logic and feature correctness. Multitenancy was the core focus - each feature had to be configurable and customizable per client, data schema and format had to cater for all tenants, due to the nature of the business being about selling the platform to different clients, which means potentially customizations and differing requirements might come.

Projects are kicked off and we would have meetings with the relevant stakeholders - various team members from departments such as reporting, frontend, other microservice. We would align the requirement there and periodally sync up. We would also sometimes do engineering improvement tickets - refactors, filling missing tests, bugfixes. Other than this, the team members are in on-call weekly duty rotation to resolve production issues.

Some of the things I did:

- add timezone support to date/time data
- refactored large-scale batch job that had to run 200K jobs (50k / hour) to be completely idempotent and retryable
- write partner-facing APIs and document them (OpenAPI)
- custom validation by per-partner schema to support different data format requirements on endpoints
- vendor integrations for new product checkout flows
- integration tests to cover batch jobs and API requests
