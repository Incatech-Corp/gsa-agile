## FoodRecall.us
The White House mandated all government agencies [enable open data ](https://cio.gov/worldclassdigitalservices/digital-strategy). The FDA created openFDA in support of this initiative. INCATech has consumed the restful api and built a consumer focused site around the food recall api.

## We Want Your Feedback
We encourage your feedback and suggestions on these documents. Content and feature suggestions and discussions are welcome via [GitHub Issues](https://github.com/Incatech-Corp/gsa-agile/issues). You may also propose changes to the content directly by submitting a pull request.
If you would like to see and discuss the changes that other people have proposed, visit the ["Pull Requests"](https://github.com/Incatech-Corp/gsa-agile/pulls) section and browse [the issues](https://github.com/Incatech-Corp/gsa-agile/issues).
Feedback will be reviewed by INCATech 

## Technical Details
During Sprint 0, the team was divided into multidisciplinary teams(https://github.com/Incatech-Corp/gsa-agile/documents). These teams were assigned to scrub the RFQ and brainstorm ideas on how to use the data available through the open FDA APIs (Play 1). The groups reconvened the Program Manager led the discovery session where each team presented its findings. The end result of the discovery process was [identification](https://github.com/Incatech-Corp/gsa-agile/blob/master/documents/Pool%202%20-%20Evidence%20Item_a%20-%20Delegation%20of%20Authority.pdf) of the business owner, project lead, the audiences, the api used, the mission and the vision. The [project](https://github.com/Incatech-Corp/gsa-agile/blob/master/documents/Pool%202%20Evidence%20Item_b%20Project%20Charter.docx) was agile and iterative (Play 4)

Business Owner: CEO INCATech final say on business wants and needs for the project
Project Lead: CIO INCATech the person accountable for the project(Play 6 & 7)
Api: https://api.fda.gov/food/enforcement.json
Audiences: Main: Consumers, Secondary: Researchers, Food Industry
Mission: Utilize the optimal technology to deliver products
Vision: Usable, responsive site that informs the consumers of recalls

We then assigned the user experience team to create personas of the target audiences.   We held a focus group to drill down on needs(Play 3). The results from this sculpted the approach and design.  We then white-boarded the design for an application the overarching ideas was visualize the data in a way that the consumer can see how it impacts them to drive usage (Play 2).

Wireframes, Mock-ups and usability testing to set user needs epics and user stories. In parallel the development team was setting up the github repository, code deploy, AWS EC2 and selecting the technology stack (Play 7,8,9,10,11,12,13)

### Running the Site Locally
The local environment must have a webserver(tomcat) and php container(apache) as well as mysql. The application is being ran on a LAMP stack on AWS

### Editing the Stylesheets
This project uses Bootstraps style sheet as a foundation pulled from bootstrap.min.css file. We continued to overlay this style sheet with a custom file called foodwise.css.  Additional CSS is generated from the Font Awesome set used for the button icons.

## License
As a work of the United States Government, this project is in the public domain within the United States. It is free for the United States Government any competitor working on the Agile BPA does not have the right to the code or intellectual property. Any usage or forking will constitute an ethics violation and disqualify that vendor from submitting a product for consideration
