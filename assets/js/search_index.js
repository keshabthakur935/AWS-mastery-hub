const searchIndex = [
    {
        "title": "AWS Master Course - Home",
        "url": "index.html",
        "content_snippet": "Learn Cloud From Zero to Advanced (Real-World + Certification + Interview Prep). Browse course modules and certification previews."
    },
    {
        "title": "About Us - AWS Master Course",
        "url": "about.html",
        "content_snippet": "Information about the AWS Master Course, our mission, experienced instructors, and practical teaching philosophy."
    },
    {
        "title": "Contact Us - AWS Master Course",
        "url": "contact.html",
        "content_snippet": "Reach out to us if you have any questions or need support using our contact form."
    },
    {
        "title": "FAQ - AWS Master Course",
        "url": "faq.html",
        "content_snippet": "Frequently Asked Questions about the course, prerequisites, certifications, and support."
    },
    {
        "title": "Glossary - AWS Master Course",
        "url": "glossary.html",
        "content_snippet": "Comprehensive glossary of cloud computing terms. Search and filter definitions."
    },
    {
        "title": "Interview Prep - AWS Master Course",
        "url": "interview-prep.html",
        "content_snippet": "Prepare for AWS technical interviews with curated questions and answers, categorized by module, plus general HR questions."
    },
    {
        "title": "Final Projects - AWS Master Course",
        "url": "final-projects.html",
        "content_snippet": "Hands-on final projects to apply your AWS knowledge: 3-Tier Web App, Serverless App, CI/CD Pipeline."
    },
    {
        "title": "Cloud Career Paths - AWS Master Course",
        "url": "career-paths.html",
        "content_snippet": "Explore main cloud computing roles, sub-roles, required skills, and relevant AWS services to master for career growth."
    },
    {
        "title": "Module 1: Course Overview - AWS Master Course",
        "url": "modules/course-overview.html",
        "content_snippet": "Introduction to AWS, benefits of cloud computing, career paths, certifications, AWS Free Tier, billing alerts, and account setup."
    },
    {
        "title": "Module 2: Cloud Basics - AWS Master Course",
        "url": "modules/cloud-basics.html",
        "content_snippet": "Evolution of computing, virtualization, IaaS, PaaS, SaaS, and cloud deployment models (public, private, hybrid)."
    },
    {
        "title": "Module 3: Cloud Challenges - AWS Master Course",
        "url": "modules/cloud-challenges.html",
        "content_snippet": "Cloud security concerns, Shared Responsibility Model, compliance, vendor lock-in, monitoring, logging, disaster recovery, and migration strategies."
    },
    {
        "title": "Module 4: Networking Basics - AWS Master Course",
        "url": "modules/networking-basics.html",
        "content_snippet": "OSI Model, IP addressing, subnets, DNS, firewalls, Security Groups, Network ACLs, VPN."
    },
    {
        "title": "Module 5: Amazon VPC - AWS Master Course",
        "url": "modules/vpc.html",
        "content_snippet": "Amazon Virtual Private Cloud (VPC), subnets, route tables, internet gateways, NAT gateways, security groups, and NACLs."
    },
    {
        "title": "Module 5: Cloud Provider Comparison - AWS Master Course",
        "url": "modules/cloud-provider-comparison.html",
        "content_snippet": "Comparison of major cloud providers (AWS, Azure, GCP) and other notable providers, their strengths and weaknesses."
    },
    {
        "title": "Module 6: AWS Global Infrastructure - AWS Master Course",
        "url": "modules/aws-global-infrastructure.html",
        "content_snippet": "AWS Regions, Availability Zones, Edge Locations, pricing fundamentals, and Shared Responsibility Model in infrastructure."
    },
    {
        "title": "Module 7: IAM - AWS Master Course",
        "url": "modules/iam.html",
        "content_snippet": "AWS Identity and Access Management (IAM), users, groups, roles, policies, MFA, and creating an IAM user."
    },
    {
        "title": "Module 8: EC2 - AWS Master Course",
        "url": "modules/ec2.html",
        "content_snippet": "Elastic Compute Cloud (EC2), instance types, pricing models, Security Groups, Key Pairs, and launching an EC2 instance."
    },
    {
        "title": "Module 9: EC2 Storage - AWS Master Course",
        "url": "modules/ec2-storage.html",
        "content_snippet": "Amazon EBS, EFS, EBS Snapshots, AMIs, Instance Store for EC2 instances."
    },
    {
        "title": "Module 10: Load Balancing & Auto Scaling - AWS Master Course",
        "url": "modules/load-balancing-auto-scaling.html",
        "content_snippet": "Load balancing concepts, ALB, NLB, CLB, Auto Scaling, scaling policies, and HA design with ELB and ASG."
    },
    {
        "title": "Module 11: S3 - AWS Master Course",
        "url": "modules/s3.html",
        "content_snippet": "Amazon Simple Storage Service (S3), buckets, policies, encryption, versioning, lifecycle management, static website hosting, and pre-signed URLs."
    },
    {
        "title": "Module 12: Snow Family - AWS Master Course",
        "url": "modules/snow-family.html",
        "content_snippet": "AWS Snow Family devices (Snowball, Snowcone, Snowmobile) for large-scale data transfer and edge computing."
    },
    {
        "title": "Module 13: Databases & Analytics - AWS Master Course",
        "url": "modules/databases-analytics.html",
        "content_snippet": "Amazon RDS, Aurora, DynamoDB, Redshift, Athena, Glue, EMR for various database and analytics needs."
    },
    {
        "title": "Module 14: Amazon DynamoDB - AWS Master Course",
        "url": "modules/dynamodb.html",
        "content_snippet": "Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale."
    },
    {
        "title": "Module 15: Caching - AWS Master Course",
        "url": "modules/caching.html",
        "content_snippet": "Caching concepts, Amazon ElastiCache (Redis, Memcached), and Amazon RDS Proxy for performance optimization."
    },
    {
        "title": "Module 16: Containers & Serverless - AWS Master Course",
        "url": "modules/containers-serverless.html",
        "content_snippet": "Containers overview, ECS, EKS, Fargate, AWS Lambda, and API Gateway for modern application architectures."
    },
    {
        "title": "Module 17: AWS Lambda - AWS Master Course",
        "url": "modules/lambda.html",
        "content_snippet": "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers."
    },
    {
        "title": "Module 18: Route 53 - AWS Master Course",
        "url": "modules/route-53.html",
        "content_snippet": "Amazon Route 53, record types, routing policies, TTL, and failover configurations."
    },
    {
        "title": "Module 19: Global Networking - AWS Master Course",
        "url": "modules/global-networking.html",
        "content_snippet": "Amazon CloudFront (CDN) and AWS Global Accelerator for optimizing application availability and performance globally."
    },
    {
        "title": "Module 20: DevOps & IaC - AWS Master Course",
        "url": "modules/devops-iac.html",
        "content_snippet": "DevOps principles, Infrastructure as Code (IaC), CloudFormation, Elastic Beanstalk, CodePipeline, and CodeDeploy."
    },
    {
        "title": "Module 21: Enterprise Storage - AWS Master Course",
        "url": "modules/enterprise-storage.html",
        "content_snippet": "Amazon FSx (Windows File Server, Lustre, ONTAP, OpenZFS), AWS Storage Gateway, and AWS DataSync."
    },
    {
        "title": "Module 22: Monitoring - AWS Master Course",
        "url": "modules/monitoring.html",
        "content_snippet": "Amazon CloudWatch, CloudTrail, EventBridge, X-Ray for monitoring, logging, and observability."
    },
    {
        "title": "Module 23: Amazon CloudWatch - AWS Master Course",
        "url": "modules/cloudwatch.html",
        "content_snippet": "Amazon CloudWatch is a monitoring and observability service from AWS that provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization."
    },
    {
        "title": "Module 24: Messaging - AWS Master Course",
        "url": "modules/messaging.html",
        "content_snippet": "Amazon SQS, SNS, Kinesis, MQ for decoupling microservices and building event-driven architectures."
    },
    {
        "title": "Module 25: Advanced VPC - AWS Master Course",
        "url": "modules/advanced-vpc.html",
        "content_snippet": "CIDR blocks, public/private subnets, NAT Gateway, Bastion Host, VPC Peering, VPC Flow Logs."
    },
    {
        "title": "Module 26: AI/ML - AWS Master Course",
        "url": "modules/ai-ml.html",
        "content_snippet": "AWS AI/ML stack, Rekognition, Polly, Lex, Translate, SageMaker for integrating intelligent capabilities."
    },
    {
        "title": "Module 27: Security & Governance - AWS Master Course",
        "url": "modules/security-governance.html",
        "content_snippet": "AWS WAF, Shield, KMS, GuardDuty, Macie, Inspector, Secrets Manager for comprehensive security and compliance."
    },
    {
        "title": "Module 28: AWS WAF - AWS Master Course",
        "url": "modules/waf.html",
        "content_snippet": "AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources."
    }
];