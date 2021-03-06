import axios from 'axios';
import { baseApi } from 'helpers/constants';


export const getCompanyById = async (companyId) => {
    try {
        const response = await axios.get(`${baseApi}/companies/${companyId}`);
        if ([200, 201].includes(response.status)) {
            return response.data.Body[0];
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.log(error)   
    }
}

export const getProductsByCompany = async (companyId, filter, limit, skip) => {
    try {
        const colors = filter.colors?.reduce((a,c)=>(a+'-'+c))
        const sizes = filter.sizes?.reduce((a,c)=> a+','+c)
        const materials = filter.materials?.reduce((a,c)=> a+','+c)
        const filters = `${colors?'&colors='+colors:''}${sizes?'&sizes='+sizes:''}${materials?'&materials='+materials:''}`
        const response = await axios.get(`${baseApi}/companies/${companyId}/products?limit=9&skip=0${filters}`);
        if ([200, 201].includes(response.status)) {
            console.log({bodyy:response.data.Body})
            return response.data.Body;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.log(error)
    }
}