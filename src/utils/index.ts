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