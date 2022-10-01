import httpService from './http.service'

const qualityEndpoint = 'quality/'

const qualityService = {
    update: async (id, content) => {
        const { data } = httpService.put(qualityEndpoint + id, content)
        return data
    },
    get: async (id) => {
        const { data } = httpService.get(qualityEndpoint + id + '/')
        console.log({ data })
        return data
    },
    fetchAll: async () => {
        const { data } = await httpService.get(qualityEndpoint)
        console.log({ data })
        return data
    },
}

export default qualityService
