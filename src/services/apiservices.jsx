// services/menuService.js
import axios from 'axios';

const BASE_URL = 'https://deepnet-server.onrender.com/api';

export const menuService = {
  getAllMenus: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/menus`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menus:', error);
      throw error;
    }
  },

  createMenu: async (menuData) => {
    try {
      const response = await axios.post(`${BASE_URL}/menus`, menuData);
      return response.data;
    } catch (error) {
      console.error('Error creating menu:', error);
      throw error;
    }
  },

  addMenuItem: async (menuId, itemData) => {
    try {
      const response = await axios.post(`${BASE_URL}/menus/${menuId}/items`, itemData);
      return response.data;
    } catch (error) {
      console.error('Error adding menu item:', error);
      throw error;
    }
  },

  getMenuById: async (menuId) => {
    try {
      const response = await axios.get(`${BASE_URL}/menus/${menuId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu:', error);
      throw error;
    }
  }
};
