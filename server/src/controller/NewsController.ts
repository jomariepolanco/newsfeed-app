require('dotenv').config()


export class NewsController {
    apiKey = process.env.API_KEY


    NewsAPI = require('newsapi')
    newsapi = new this.NewsAPI(this.apiKey)

    async business(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'business'
        })
        return response.articles
    }

    async entertainment(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'entertainment'
        })
        return response.articles
    }

    async general(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'general'
        })
        return response.articles
    }

    async health(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'health'
        })
        return response.articles
    }

    async science(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'science'
        })
        return response.articles
    }

    async sports(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'sports'
        })
        return response.articles
    }

    async technology(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'technology'
        })
        return response.articles
    }
}
