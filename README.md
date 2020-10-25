# wappalyzer-rest
## Run
```
sudo docker-compose up -d --build
```
## Usage
```curl http://localhost:8089/wappalyzer/?urls=["https://google.com", "https://github.com"]```\
Output:
```
[
  {
    "url": "https://google.com",
    "results": {
      "urls": {
        "https://google.com/": {
          "status": 301
        },
        "https://www.google.com/": {
          "status": 200
        },
        "https://www.google.com/preferences?hl=en": {
          "status": 200
        },
        "https://www.google.com/advanced_search?hl=en-KZ&authuser=0": {
          "status": 200
        },
        "https://www.google.com/setprefs?sig=0_3vYynCgTAFfY5DOkMZLGc4zhzO8%3D&hl=kk&source=homepage&sa=X&ved=0ahUKEwjt5MHpjs_sAhVw-yoKHTkECkMQ2ZgBCAU": {
          "status": 302
        },
        "https://www.google.com/setprefs?sig=0_3vYynCgTAFfY5DOkMZLGc4zhzO8%3D&hl=ru&source=homepage&sa=X&ved=0ahUKEwjt5MHpjs_sAhVw-yoKHTkECkMQ2ZgBCAY": {
          "status": 302
        },
        "https://www.google.com/intl/en/ads/": {
          "status": 301
        },
        "https://www.google.com/webhp?tab=ww": {
          "status": 200
        },
        "https://ads.google.com/intl/en/home/": {
          "status": 200
        },
        "https://www.google.com/calendar?tab=wc": {
          "status": 301
        },
        "https://calendar.google.com/calendar?tab=wc": {
          "status": 302
        },
        "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dwc&followup=https://calendar.google.com/calendar/render?tab%3Dwc&scc=1": {
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
          "slug": "gsap",
          "name": "GSAP",
          "confidence": 100,
          "version": null,
          "icon": "TweenMax.png",
          "website": "https://greensock.com/gsap",
          "cpe": null,
          "categories": [
            {
              "id": 12,
              "slug": "javascript-frameworks",
              "name": "JavaScript frameworks"
            }
          ]
        },
        {
          "slug": "angularjs",
          "name": "AngularJS",
          "confidence": 100,
          "version": "1.6.4",
          "icon": "AngularJS.svg",
          "website": "https://angularjs.org",
          "cpe": null,
          "categories": [
            {
              "id": 12,
              "slug": "javascript-frameworks",
              "name": "JavaScript frameworks"
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
        },
        {
          "slug": "google-tag-manager",
          "name": "Google Tag Manager",
          "confidence": 100,
          "version": null,
          "icon": "Google Tag Manager.png",
          "website": "http://www.google.com/tagmanager",
          "cpe": null,
          "categories": [
            {
              "id": 42,
              "slug": "tag-managers",
              "name": "Tag managers"
            }
          ]
        },
        {
          "slug": "google-analytics",
          "name": "Google Analytics",
          "confidence": 100,
          "version": null,
          "icon": "Google Analytics.svg",
          "website": "http://google.com/analytics",
          "cpe": null,
          "categories": [
            {
              "id": 10,
              "slug": "analytics",
              "name": "Analytics"
            },
            {
              "id": 61,
              "slug": "saas",
              "name": "SaaS"
            }
          ]
        }
      ]
    }
  },
  {
    "url": "https://github.com",
    "results": {
      "urls": {
        "https://github.com/": {
          "status": 200
        },
        "https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home": {
          "status": 200
        },
        "https://github.com/features": {
          "status": 200
        },
        "https://github.com/features/code-review/": {
          "status": 200
        },
        "https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2Ffeatures&source=header": {
          "status": 200
        },
        "https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2Ffeatures%2Fcode-review&source=header": {
          "status": 200
        },
        "https://github.com/features/project-management/": {
          "status": 200
        },
        "https://github.com/features/integrations": {
          "status": 200
        },
        "https://github.com/features/actions": {
          "status": 200
        },
        "https://github.com/features/packages": {
          "status": 200
        }
      },
      "technologies": [
        {
          "slug": "ruby-on-rails",
          "name": "Ruby on Rails",
          "confidence": 100,
          "version": null,
          "icon": "Ruby on Rails.png",
          "website": "https://rubyonrails.org",
          "cpe": "cpe:/a:rubyonrails:rails",
          "categories": [
            {
              "id": 18,
              "slug": "web-frameworks",
              "name": "Web frameworks"
            }
          ]
        },
        {
          "slug": "youtube",
          "name": "YouTube",
          "confidence": 100,
          "version": null,
          "icon": "YouTube.png",
          "website": "http://www.youtube.com",
          "cpe": null,
          "categories": [
            {
              "id": 14,
              "slug": "video-players",
              "name": "Video players"
            }
          ]
        },
        {
          "slug": "amazon-web-services",
          "name": "Amazon Web Services",
          "confidence": 100,
          "version": null,
          "icon": "aws.svg",
          "website": "https://aws.amazon.com/",
          "cpe": null,
          "categories": [
            {
              "id": 62,
              "slug": "paas",
              "name": "PaaS"
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
          "slug": "github-pages",
          "name": "GitHub Pages",
          "confidence": 100,
          "version": null,
          "icon": "GitHub.svg",
          "website": "https://pages.github.com/",
          "cpe": null,
          "categories": [
            {
              "id": 62,
              "slug": "paas",
              "name": "PaaS"
            }
          ]
        },
        {
          "slug": "google-analytics-enhanced-ecommerce",
          "name": "Google Analytics Enhanced eCommerce",
          "confidence": 100,
          "version": null,
          "icon": "Google Analytics.svg",
          "website": "https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce",
          "cpe": null,
          "categories": [
            {
              "id": 10,
              "slug": "analytics",
              "name": "Analytics"
            },
            {
              "id": 61,
              "slug": "saas",
              "name": "SaaS"
            }
          ]
        },
        {
          "slug": "google-analytics",
          "name": "Google Analytics",
          "confidence": 100,
          "version": null,
          "icon": "Google Analytics.svg",
          "website": "http://google.com/analytics",
          "cpe": null,
          "categories": [
            {
              "id": 10,
              "slug": "analytics",
              "name": "Analytics"
            },
            {
              "id": 61,
              "slug": "saas",
              "name": "SaaS"
            }
          ]
        },
        {
          "slug": "digicert",
          "name": "DigiCert",
          "confidence": 100,
          "version": null,
          "icon": "DigiCert.svg",
          "website": "https://www.digicert.com/",
          "cpe": null,
          "categories": [
            {
              "id": 70,
              "slug": "ssl-tls-certificate-authorities",
              "name": "SSL/TLS certificate authorities"
            }
          ]
        }
      ]
    }
  }
]
```