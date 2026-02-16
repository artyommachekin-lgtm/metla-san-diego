import React from 'react';
import { SITE_CONFIG } from '../src/config/site-config';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  className = '',
  height = '300',
}) => {
  const query = encodeURIComponent(
    `${SITE_CONFIG.companyName}, ${SITE_CONFIG.address.full}`
  );

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200 ${className}`}>
      <iframe
        title={`${SITE_CONFIG.companyName} - ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
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
