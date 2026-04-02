import React from 'react';

interface GoogleMapProps {
  className?: string;
  height?: string;
  embedUrl?: string;
  title?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  className = '',
  height = '300',
  embedUrl,
  title,
}) => {
  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200 ${className}`}>
      <iframe
        title={title || "Metla House Cleaning San Diego - Google Business Profile"}
        src={embedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429158.43828523083!2d-117.43033365683341!3d32.824055907153195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8099cf3c15980c99%3A0x8a5d2a4abb1c4abd!2sMetla%20House%20Cleaning%20San%20Diego!5e0!3m2!1sen!2sus"}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
