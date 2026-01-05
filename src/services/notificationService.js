// frontend/src/services/notificationService.js

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://monday-backend-one.vercel.app/api';

// Get auth token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem('authToken') || localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

// Handle API errors
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

export const notificationService = {
  // Get all notifications
  getNotifications: async (limit = 50, skip = 0, userId = null) => {
    try {
      const url = userId
        ? `${API_URL}/notifications?limit=${limit}&skip=${skip}&userId=${userId}`
        : `${API_URL}/notifications?limit=${limit}&skip=${skip}`;

      const response = await fetch(url, { headers: getAuthHeader() });
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  },

  // Get unread notifications only
  getUnreadNotifications: async () => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/unread`,
        { headers: getAuthHeader() }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching unread notifications:', error);
      throw error;
    }
  },

  // Get unread count
  getUnreadCount: async () => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/unread-count`,
        { headers: getAuthHeader() }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching unread count:', error);
      throw error;
    }
  },

  // Mark notification as read
  markAsRead: async (notificationId) => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/${notificationId}/read`,
        {
          method: 'PUT',
          headers: getAuthHeader()
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error marking as read:', error);
      throw error;
    }
  },

  // Mark all notifications as read
  markAllAsRead: async () => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/read-all`,
        {
          method: 'PUT',
          headers: getAuthHeader()
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error marking all as read:', error);
      throw error;
    }
  },

  // Delete notification
  deleteNotification: async (notificationId) => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/${notificationId}`,
        {
          method: 'DELETE',
          headers: getAuthHeader()
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw error;
    }
  },

  // Delete all read notifications
  deleteAllRead: async () => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/read/all`,
        {
          method: 'DELETE',
          headers: getAuthHeader()
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error deleting read notifications:', error);
      throw error;
    }
  },

  // Create notification (for testing)
  createNotification: async (notificationData) => {
    try {
      const response = await fetch(
        `${API_URL}/notifications`,
        {
          method: 'POST',
          headers: getAuthHeader(),
          body: JSON.stringify(notificationData)
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error creating notification:', error);
      throw error;
    }
  },

  // Get notifications by type
  getByType: async (type) => {
    try {
      const response = await fetch(
        `${API_URL}/notifications/type/${type}`,
        { headers: getAuthHeader() }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching notifications by type:', error);
      throw error;
    }
  }
};

export default notificationService;