# wappalyzer-rest
## Run
```
sudo docker-compose up -d --build
```
## Usage
```curl http://localhost:8089/wappalyzer/?url=https://google.com```\
Output:
```
{
  "urls": {
    "https://google.com/": {
      "status": 301
    },
    "https://www.google.com/": {
      "status": 200
    },
    "https://www.google.com/calendar?tab=wc": {
      "status": 301
    },
    "https://calendar.google.com/calendar?tab=wc": {
      "status": 302
    },
    "https://www.google.com/preferences?hl=kk": {
      "status": 200
    },
    "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dwc&followup=https://calendar.google.com/calendar/render?tab%3Dwc&scc=1": {
      "status": 200
    },
    "https://www.google.com/advanced_search?hl=kk&authuser=0": {
      "status": 200
    },
    "https://www.google.com/setprefs?sig=0_hrjIZUjXYXUG5PcIucx5VAW4N8U%3D&hl=ru&source=homepage&sa=X&ved=0ahUKEwiB9pfK1s3sAhVgAxAIHekcBvkQ2ZgBCAU": {
      "status": 302
    },
    "https://www.google.com/setprefs?sig=0_hrjIZUjXYXUG5PcIucx5VAW4N8U%3D&hl=en&source=homepage&sa=X&ved=0ahUKEwiB9pfK1s3sAhVgAxAIHekcBvkQ2ZgBCAY": {
      "status": 302
    },
    "https://www.google.com/webhp?tab=ww": {
      "status": 200
    }
  },
  "technologies": [
    {
      "slug": "java",
      "name": "Java",
      "confidence": 100,
      "version": null,
      "icon": "Java.png",
      "website": "http://java.com",
      "cpe": null,
      "categories": [
        {
          "id": 27,
          "slug": "programming-languages",
          "name": "Programming languages"
        }
      ]
    },
    {
      "slug": "opengse",
      "name": "OpenGSE",
      "confidence": 100,
      "version": null,
      "icon": "Google.svg",
      "website": "http://code.google.com/p/opengse",
      "cpe": null,
      "categories": [
        {
          "id": 22,
          "slug": "web-servers",
          "name": "Web servers"
        }
      ]
    },
    {
      "slug": "google-workspace",
      "name": "Google Workspace",
      "confidence": 100,
      "version": null,
      "icon": "Google Workspace.svg",
      "website": "https://workspace.google.com/",
      "cpe": null,
      "categories": [
        {
          "id": 30,
          "slug": "webmail",
          "name": "Webmail"
        },
        {
          "id": 61,
          "slug": "saas",
          "name": "SaaS"
        }
      ]
    },
    {
      "slug": "google-web-server",
      "name": "Google Web Server",
      "confidence": 100,
      "version": null,
      "icon": "Google.svg",
      "website": "http://en.wikipedia.org/wiki/Google_Web_Server",
      "cpe": "cpe:/a:google:web_server",
      "categories": [
        {
          "id": 22,
          "slug": "web-servers",
          "name": "Web servers"
        }
      ]
    }
  ]
}
```