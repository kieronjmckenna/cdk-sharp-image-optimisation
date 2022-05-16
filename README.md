<div id="top"></div>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div> -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This repo was created to go along side a medium article I wrote here:

https://kieron-mckenna.medium.com/s3-image-optimization-and-compression-with-the-cdk-a-typescript-lambda-and-sharp-894b272d2d8e

I wanted to use the cdk to optimise images when they're uploaded to an s3 bucket using the cdk. There was a few headaches I ran into that I hope this repo and the above article will help people in the future

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [AWS-CDK V2](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
- [Sharp](https://sharp.pixelplumbing.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can clone this repo, but I imagine it would just be easier to incorperate this into existing cdk projects

### Prerequisites

- Docker
- Node
- AWS Account

### Installation

1. Clone the repo

```sh
git clone https://github.com/kieronjmckenna/cdk-sharp-image-optimisation.git
```

2. Install NPM packages

```sh
yarn
```

3. Deploy to AWS

```sh
npx cdk deploy
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Me: [@KieronMckenna7](https://twitter.com/KieronMckenna7)

Project Link: [https://github.com/kieronjmckenna/cdk-sharp-image-optimisation](https://github.com/kieronjmckenna/cdk-sharp-image-optimisation)

<p align="right">(<a href="#top">back to top</a>)</p>
```
