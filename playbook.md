# 🛡️ SOC 2 Playbook – Security TSC

This playbook is used to assess and implement controls for the **Security Trust Services Criteria** during a SOC 2 readiness or remediation engagement.

---

##  1. Control Environment & Governance

- [ ] Who is responsible for overall security governance (e.g., CISO, Security Lead)?
- [ ] Is there a formal security program or charter in place?
- [ ] Are roles and responsibilities for security defined and documented?
- [ ] Is there a security training and awareness program for employees?
- [ ] Are background checks conducted on new hires?

---

##  2. Logical Access Controls

- [ ] How is access to production systems controlled?
- [ ] Is MFA enforced for admin and remote access?
- [ ] Are SSO and centralized identity providers (e.g., Okta, Google Workspace) in use?
- [ ] Is there a documented user provisioning/deprovisioning process?
- [ ] How often are access reviews performed, and how are they documented?

---

##  3. System & Network Security

- [ ] Are network security groups/firewall rules in place and reviewed regularly?
- [ ] Are VPCs segmented appropriately for workload isolation?
- [ ] Are there controls for public-facing services (e.g., WAF, rate limiting)?
- [ ] Is EDR or antivirus software installed and monitored on endpoints?
- [ ] Are there intrusion detection/prevention mechanisms?

---

##  4. Change Management

- [ ] Is there a documented and enforced change management process?
- [ ] Are infrastructure changes tracked (e.g., via GitHub PRs, Terraform)?
- [ ] Are production deployments peer-reviewed?
- [ ] Is there audit logging for changes to critical infrastructure?
- [ ] How are emergency changes handled and documented?

---

##  5. Risk Management

- [ ] Is there a formal risk assessment conducted annually?
- [ ] Are security risks documented and tracked to resolution?
- [ ] Is there a process to evaluate new vendors or software for risk?
- [ ] Are penetration tests or vulnerability scans performed? How often?

---

##  6. Monitoring & Logging

- [ ] What logging solutions are in place (e.g., CloudTrail, Falcon, CloudWatch)?
- [ ] Is there centralized log aggregation and alerting?
- [ ] Who monitors for suspicious activity?
- [ ] Is there documented incident response playbook and escalation paths?
- [ ] Are logs immutable and retained for at least 1 year?

---

##  7. Incident Response

- [ ] Is there an incident response plan?
- [ ] Who is part of the incident response team?
- [ ] How are incidents detected, triaged, and documented?
- [ ] Is there a post-mortem and root cause analysis process?
- [ ] Have you conducted a tabletop or real-world incident simulation?

---

##  8. Data Protection & Encryption

- [ ] Are all customer data stores encrypted at rest and in transit?
- [ ] What encryption standards are used (AES-256, TLS 1.2/1.3)?
- [ ] How are encryption keys managed (e.g., AWS KMS, HSM)?
- [ ] Are secrets/passwords rotated regularly and stored securely (e.g., Vault, AWS Secrets Manager)?

---

##  9. Vendor Management

- [ ] Is there a vendor security assessment process?
- [ ] Are vendors required to sign DPAs or security agreements?
- [ ] How is ongoing vendor risk monitored?
- [ ] Are high-risk vendors (e.g., cloud providers) SOC 2 or ISO 27001 certified?

---

**Next TSC: [Availability →](./AVAILABILITY_TSC_PLAYBOOK.md)**  
**Back to [Main README](./README.md)**  
