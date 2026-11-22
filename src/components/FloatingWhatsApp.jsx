import { useState } from 'react';
import { createGeneralWhatsAppLink } from '../data/products';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="floating-wa-wrapper">
      <div className={`floating-wa-tooltip ${isHovered ? 'visible' : ''}`}>
        Order on WhatsApp 💬
      </div>
      <a
        href={createGeneralWhatsAppLink('Hello Sweet Cravings! I want to place an order from your website.')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Order on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="floating-wa-ping"></span>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.848.813 2.796.813h.005c3.179 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm0 10.378c-.85 0-1.68-.228-2.408-.659l-.173-.102-1.789.47.477-1.745-.112-.178c-.475-.755-.726-1.636-.725-2.544.001-2.541 2.068-4.608 4.61-4.608 2.542 0 4.609 2.067 4.61 4.608 0 2.542-2.068 4.608-4.61 4.608zm2.527-3.447c-.139-.069-.821-.405-.948-.451-.127-.046-.22-.069-.312.07-.093.139-.359.451-.44.544-.081.093-.162.104-.301.035-.139-.07-.587-.216-1.118-.689-.413-.368-.692-.823-.773-.962-.081-.139-.009-.214.061-.283.063-.062.139-.162.208-.243.069-.081.093-.139.139-.231.046-.093.023-.174-.012-.243-.035-.07-.312-.751-.428-1.029-.112-.269-.227-.233-.312-.237-.081-.005-.174-.006-.266-.006-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .683.497 1.343.567 1.436.07.093.979 1.494 2.371 2.096.331.143.59.229.791.293.333.106.636.091.876.055.267-.04.821-.336.937-.66.116-.324.116-.602.081-.66-.035-.058-.128-.093-.267-.162z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
