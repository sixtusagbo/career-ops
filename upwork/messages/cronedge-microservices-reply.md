# CronEdge reply — microservices question (copy-paste the block below)

I work with Docker and containerized backends regularly (Docker, Docker Compose, CI/CD), so I'm comfortable structuring a backend as independent, containerized services with clear boundaries rather than one monolith, each deployable and scalable on its own. For the CronEdge site itself, a clean modular Next.js setup is plenty, but for the customer-portal and operations phases you mentioned, a containerized service-based backend is exactly how I'd build it so it scales without rewrites.
