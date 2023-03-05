# Servidio

[![NPM Version](https://badgen.net/npm/v/servidio)](https://www.npmjs.com/package/servidio)

JavaScript Frontend Services

[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/servidio)](https://github.com/philippebeck/servidio/commits/master)
[![NPM Downloads](https://badgen.net/npm/dt/servidio)](https://www.npmjs.com/package/servidio)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b65b93fc3484479aa02c1891609e47e2)](https://www.codacy.com/gh/philippebeck/servidio/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ada4e929f6116145366/maintainability)](https://codeclimate.com/github/philippebeck/servidio/maintainability)

[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/servidio)](https://github.com/philippebeck/servidio)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/servidio)](https://github.com/philippebeck/servidio/tree/master)

## Overview

Servidio is a JavaScript Frontend Service Library.  
You will find some Services with Checkers, Data & Getters.  
Data Services are using Axios.

## Summary

[Servidio](#servidio)  
[Overview](#overview)  
[Summary](#summary)  
[Package](#package)  
[Download](#download)  
[Content](#content)  
[Usage for Vue3 + NPM](#usage-for-vue3--npm)  

---

## Package

NPM : `npm i servidio`  
or  
Yarn : `yarn add servidio`  

---

## Download

[Latest Release](https://github.com/philippebeck/servidio/releases)  
or  
`git clone https://github.com/philippebeck/servidio.git`  
or  
[Master ZIP](https://github.com/philippebeck/servidio/archive/refs/heads/master.zip)
  
---

## Content

Checker part :  
-   **checkEmail(email)**  
-   **checkLikes(usersLiked)**  
-   **checkNumber(number, min, max)**  
-   **checkPass(pass)**  
-   **checkRole(userRole, role)**  
-   **checkString(string, min, max)**  
-   **checkUrl(url)**  

Data part :  
-   **getData(url)**  
-   **postData(url, data)**  
-   **patchData(url, data)**  
-   **putData(url, data)**  
-   **deleteData(url)**

Getter part :  
-   **getCats(items)**  
-   **getItemName(id, items)**  
-   **getItemsByCat(items)**  
-   **getScoreAverage(id, array)**  

---

## Usage for Vue3 + NPM

1.  Copy the `servidio/constants.js` file to your project root like this : `/constants.js` & replace values with your own values
2.  In `main.js` of Vue3, import `servidio` like this : `import serve from "servidio"`
3.  Then, add this line after creating App but before mounting : `app.config.globalProperties.$serve = serve` ([example](https://github.com/philippebeck/vesan/blob/master/src/main.js))
4.  Then use it in yours components like in these examples : 
    -  `this.$serve.getData(url)` ([example](https://github.com/philippebeck/vesan/blob/master/src/views/HomeView.vue))  
    -  `this.$serve.postData(url, data)`  
    -  `this.$serve.checkEmail(message.email)` ([example](https://github.com/philippebeck/vesan/blob/master/src/views/ContactView.vue))  
    -  `this.$serve.checkPass(user.pass)`  
