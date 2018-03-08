# The stack
I like to keep a list of everything that’s _directly_ involved in a project, meaning that I explicitly touched it in some way.

## Infrastructure
- Google Domains for the .store domain
- AWS S3 to host the static assets
- AWS Route 53 for DNS (Google Domains doesn’t support root CNAME records, which are required to point the naked domain to an S3 Bucket)
- AWS CloudFront
- AWS ACM

David Baumgold has [an excellent guide](https://www.davidbaumgold.com/tutorials/host-static-site-aws-s3-cloudfront/) on how to put everything together.

## Static Site Generation
- Gulp with extensions
- Pug
- SASS

## Misc
- Google Fonts
- Google Analytics
