export const getOrderHistory = async (email) => {
    const token = localStorage.getItem("token");
    let params = {};
    if (email) {
      params.email = email;
    }
    let url =
      `${import.meta.env.VITE_API_URL}/history` + new URLSearchParams(params);
  
    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  
    // get data
    const result = await response.json();
    if (!result?.success) {
      throw new Error(result?.message);
    }
  
    return result?.data;
  };
  
  export const getOrderDetailById = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/history/detail/${id}`;
  
    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  
    // get data
    const result = await response.json();
    if (!result?.success) {
      throw new Error(result?.message);
    }
  
    return result?.data;
  };