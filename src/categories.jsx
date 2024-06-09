import axios from "axios";

export const fetchCategories = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/categorielist');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        return []; 
    }
};
