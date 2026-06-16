import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'

export const localStorageGetItem = (key: string, defaultValue = '') => {
  return localStorage.getItem(key) || defaultValue
}

export function getRelativeTime(date: Date | string): string {
  const now = new Date();
  const inputDate = typeof date === 'string' ? new Date(date) : date;

  const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

  const units: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const unit in units) {
    const seconds = units[unit];
    if (Math.abs(diffInSeconds) >= seconds || unit === 'minute') {
      const value = Math.floor(diffInSeconds / seconds);
      const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
      
return rtf.format(-value, unit as Intl.RelativeTimeFormatUnit);
    }
  }
  
return 'Just now';
}

export const hexToRgba = (hex: string, alpha: number = 100): string => {
  // Remove the '#' if present
  hex = hex.replace('#', '')

  // Extract red, green, blue
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Return in rgba format
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
}


/**
 * Handles errors gracefully
 * @param error - The error thrown by Axios or other sources
 * @param defaultMessage - Default error message if no specific error message is available
 */
export const handleError = (err: unknown, defaultMessage?: string) => {
  const message = err instanceof Error ? err.message : defaultMessage || 'An unknown error occurred'
  const toastOptions = { hideProgressBar: true, toastId: message }

  if (!toast.isActive(message)) {
    toast.error(message, toastOptions)
  } else {
    toast.update(message, { ...toastOptions, render: message })
  }
}
