import React from 'react';
import {  fetchCategories } from '@/utils/api';
import { AxiosResponse } from 'axios';
import { ICategory, iCollectionResponse } from '@/utils/types';
// import { useQuery } from '@tanstack/react-query';

 const Tabs = async () => {
 
    const data = await fetchData();
    console.log(data)
    // const { data, error, isLoading } = useQuery(
    //     { 
    //         queryKey: ['categories'], 
    //         queryFn: fetchData
    //     }
    // );
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    return (
      <>
    {
          data?.map((item, ind) => (
            <div key={ind}>
              <h2>{item.attributes.Title}</h2>
            </div>
          ))
        }
      </>
    )
}

export default Tabs

async function fetchData() {
    const response: AxiosResponse<iCollectionResponse<ICategory[]>> = await fetchCategories()
    let categoriesData = response.data.data.map(item => ({
      id: item.id,
      attributes: item.attributes
    }));
    return categoriesData;
  }
  
  