# _IBM Watson Speech-to-Text_ Open Microservice

> Transcribe audio file of human speech to text.

[![Open Microservice Specification Version](https://img.shields.io/badge/Open%20Microservice-1.0-477bf3.svg)](https://openmicroservices.org) [![Open Microservices Spectrum Chat](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/open-microservices) [![Open Microservices Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](https://github.com/oms-services/.github/blob/master/CODE_OF_CONDUCT.md) [![Open Microservices Commitzen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Introduction

This project is an example implementation of the [Open Microservice Specification](https://openmicroservices.org), a standard originally created at [Storyscript](https://storyscript.io) for building highly-portable "microservices" that expose the events, actions, and APIs inside containerized software.

## Getting Started

The `oms` command-line interface allows you to interact with Open Microservices. If you're interested in creating an Open Microservice the CLI also helps validate, test, and debug your `oms.yml` implementation!

See the [oms-cli](https://github.com/microservices/oms) project to learn more!

### Installation

```
npm install -g @microservices/oms
```

## Usage

### Open Microservices CLI Usage

Once you have the [oms-cli](https://github.com/microservices/oms) installed, you can run any of the following commands from within this project's root directory:

#### Actions

##### transcribe

> Transcribe speech in an audio file to text.
##### Action Arguments

| Argument Name | Type | Required | Default | Description |
|:------------- |:---- |:-------- |:--------|:----------- |
| url | `string` | `true` | None | A URL to a audio file to transcribe. |
| contentType | `string` | `false` | None | The format (MIME type) of the audio. For more information about specifying an audio format, see **Audio formats (content types)** in the method description. |
| model | `enum` | `false` | None | The identifier of the model that is to be used for the recognition request. |
| speakerLabels | `boolean` | `false` | None | If true, the response includes labels that identify which words were spoken by which participants in a multi-person exchange. By default, the service returns no speaker labels. Setting speaker_labels to true forces the timestamps parameter to be true, regardless of whether you specify false for the parameter. |
| profanityFilter | `boolean` | `false` | None | If true, the service filters profanity from all output except for keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to false to return results with no censoring. Applies to US English transcription only. |
| smartFormatting | `boolean` | `false` | None | If true, the service converts dates, times, series of digits and numbers, phone numbers, currency values, and internet addresses into more readable, conventional representations in the final transcript of a recognition request. For US English, the service also converts certain keyword strings to punctuation symbols. By default, the service performs no smart formatting. Note: Applies to US English, Japanese, and Spanish transcription only. |
| timestamps | `boolean` | `false` | None | If true, the service returns time alignment for each word. By default, no timestamps are returned. |
| audioMetrics | `boolean` | `false` | None | If true, requests detailed information about the signal characteristics of the input audio. The service returns audio metrics with the final transcription results. By default, the service returns no audio metrics. |
| redaction | `boolean` | `false` | None | If true, the service redacts, or masks, numeric data from final transcripts. The feature redacts any number that has three or more consecutive digits by replacing each digit with an X character. It is intended to redact sensitive numeric data, such as credit card numbers. By default, the service performs no redaction. When you enable redaction, the service automatically enables smart formatting, regardless of whether you explicitly disable that feature. To ensure maximum security, the service also disables keyword spotting (ignores the keywords and keywords_threshold parameters) and returns only a single final transcript (forces the max_alternatives parameter to be 1). Note: Applies to US English, Japanese, and Korean transcription only. |
| API_KEY | `string` | `true` | None | An IBM Cloud `API KEY`. Go to the Speech to Text page in the IBM Cloud Catalog: https://cloud.ibm.com/catalog/services/speech-to-text |

``` shell
oms run transcribe \ 
    -a url='*****' \ 
    -a contentType='*****' \ 
    -a model='*****' \ 
    -a speakerLabels='*****' \ 
    -a profanityFilter='*****' \ 
    -a smartFormatting='*****' \ 
    -a timestamps='*****' \ 
    -a audioMetrics='*****' \ 
    -a redaction='*****' \ 
    -e API_KEY=$API_KEY
```

## Contributing

All suggestions in how to improve the specification and this guide are very welcome. Feel free share your thoughts in the Issue tracker, or even better, fork the repository to implement your own ideas and submit a pull request.

[![Edit watson-speech on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/oms-services/watson-speech)

This project is guided by [Contributor Covenant](https://github.com/oms-services/.github/blob/master/CODE_OF_CONDUCT.md). Please read out full [Contribution Guidelines](https://github.com/oms-services/.github/blob/master/CONTRIBUTING.md).

## Additional Resources

* [Install the CLI](https://github.com/microservices/oms) - The OMS CLI helps developers create, test, validate, and build microservices.
* [Example OMS Services](https://github.com/oms-services) - Examples of OMS-compliant services written in a variety of languages.
* [Example Language Implementations](https://github.com/microservices) - Find tooling & language implementations in Node, Python, Scala, Java, Clojure.
* [Storyscript Hub](https://hub.storyscript.io) - A public registry of OMS services.
* [Community Chat](https://spectrum.chat/open-microservices) - Have ideas? Questions? Join us on Spectrum.
