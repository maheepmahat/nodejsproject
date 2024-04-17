const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        appetizers: [MenuItem]
        entrees: [MenuItem]
        sandwiches: SandwichCategory
        salads: [MenuItem]
        soupSaladCombos: [MenuItem]
        fajitas: [MenuItem]
        tacos: [MenuItem]
        enchiladas: [Enchilada]
        specialItems: [MenuItem]  
        quiches: [MenuItem]       
        greenSalads: [MenuItem]   
    }

    type MenuItem {
        name: String
        description: String
        price: Float
    }

    type SandwichCategory {
        cold: [MenuItem]
        hot: [MenuItem]
    }
    type Enchilada {
        name: String
        description: String
        options: [String] 
        prices: [Float]    
    }
   
`;

module.exports = typeDefs;
