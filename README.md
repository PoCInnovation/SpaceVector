# SpaceVector :rocket:

SpaceVector is a platform for semantic search on satellite images using state of the art AI. It aims to support the use of satellite images.

## How does it work?

### How to [SpaceVector](https://spacevector.laybraid.fr/) works ?

When you make a query, the system embed you text with OpenAI Clip text encoder. Then, it search the most similar images in the vector database. The images are embed with OpenAI Clip image encoder. The system return the most similar images.

The majority images come from the [EuroSat](https://github.com/phelber/EuroSAT) dataset. The dataset contains 27,000 labeled images of 10 classes. The images are 64x64 pixels and are in the RGB format. The classes are:
- Annual Crop
- Forest
- Herbaceous Vegetation
- Highway
- Industrial
- Pasture
- Permanent Crop
- Residential
- River
- Sea/Lake

## Getting Started

### Installation

For this project, you need to have [Python](https://www.python.org/downloads/) installed on your computer.

You need docker and docker-compose to run the project.

### Quickstart

For running the project, you need to run the following command:

```bash
docker-compose up
```

### Usage

After you launch the docker compose, you can access the frontend on http://localhost:3000 and the backend on http://localhost:8000

## Get involved

You're invited to join this project ! Check out the [contributing guide](./CONTRIBUTING.md).

If you're interested in how the project is organized at a higher level, please contact the current project manager.

## Our PoC team :heart:

Developer
| [<img src="https://github.com/LayBraid.png?size=85" width=85><br><sub>Clément Loeuillet</sub>](https://github.com/LayBraid)
| :---: |

Manager
| [<img src="https://github.com/Mikatech.png?size=85" width=85><br><sub>Mikaël Vallenet</sub>](https://github.com/Mikatech)
| :---: |

<h2 align=center>
Organization
</h2>

<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories

> Made with :heart: by PoC
