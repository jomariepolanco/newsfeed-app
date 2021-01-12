require('dotenv').config()


export class NewsController {
    apiKey = process.env.API_KEY


    NewsAPI = require('newsapi')
    newsapi = new this.NewsAPI(this.apiKey)

    async business(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'business',
            country: 'us'
        })
        return response.articles
    }

    async entertainment(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'entertainment',
            country: 'us'
        })
        return response.articles
    }

    async general(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'general',
            country: 'us'
        })
        return response.articles
    }

    async health(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'health',
            country: 'us'
        })
        return response.articles
    }

    async science(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'science',
            country: 'us'
        })
        return response.articles
    }

    async sports(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'sports',
            country: 'us'
        })
        return response.articles
    }

    async technology(){
        const response = await this.newsapi.v2.topHeadlines({
            category: 'technology',
            country: 'us'
        })
        return response.articles
    }
}
