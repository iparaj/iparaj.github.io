# Dr. Paraj - Academic & Research Portfolio

## Overview

This repository contains the source code for a professional academic portfolio and research website for Dr. Paraj, Associate Professor at the Department of Electronics & Electrical Engineering (EEE) at IIT Guwahati. The website serves as a comprehensive digital presence showcasing academic achievements, research contributions, publications, teaching endeavors, and creative work.

## Project Description

The website is a modern, responsive single-page application (SPA) designed to present:

- **Academic Profile**: Comprehensive overview of professional background and expertise in Signal Processing, Communication Systems, and Embedded Electronics
- **Research Publications**: Peer-reviewed journal articles and conference proceedings
- **Presentations & Talks**: Professional presentations and speaking engagements
- **Teaching Materials**: Courses and educational resources
- **Research Projects**: Detailed project portfolios and case studies
- **Academic CV**: Complete curriculum vitae and professional credentials
- **Technical Blog**: Research insights and technical discussions
- **Photography Portfolio**: Professional photography collection

## Key Features

**Responsive Design**
- Mobile-friendly interface with adaptive layout
- Dedicated mobile navigation menu with toggle functionality
- Optimized for desktop, tablet, and smartphone viewing

**Multi-Section Organization**
- Eight distinct content sections accessible via tabbed navigation
- Smooth navigation with hash-based URL routing
- Dynamic section loading with scroll-to-top functionality

**Professional Styling**
- Modern CSS-based responsive design
- Custom typography with Google Fonts integration
- Font Awesome icon integration for visual enhancement
- Professional color scheme and layout

**External Integration**
- Social media profile links (LinkedIn, GitHub, ResearchGate, etc.)
- Academic network profiles (Google Scholar, ORCID, IEEE Xplore)
- Contact information and affiliation details

## Project Structure

```

├── index.html                  # Main HTML entry point
├── script.js                   # JavaScript functionality and interactivity
├── style.css                   # Main stylesheet
├── README.md                   # Project documentation
├── album/                      # Photography portfolio
│   ├── photo-1.html through photo-6.html
│   ├── script.js              # Photo gallery functionality
│   └── style.css              # Gallery styling
├── images/                     # Image assets
│   └── paraj.jpeg             # Profile photograph
├── icon/                       # Social media icons
│   ├── linkedin.png
│   ├── facebook.png
│   ├── github.png
│   ├── instagram.webp
│   └── x.webp
├── documentations/             # Additional documentation and resources
└── .git/                       # Git version control

```

## Technology Stack

- **Frontend Framework**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Icons & Typography**: Font Awesome 6.4.0, Google Fonts (Inter, Source Serif Pro)
- **Responsive Design**: CSS Media Queries and Flexbox
- **Version Control**: Git

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Web server for local development (recommended for full functionality)

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Drone
   ```


2. **Access the Website**
   
   Open your browser and navigate to `http://localhost:8000`

## Usage

### Navigation

1. **Tab Navigation**: Click on any tab in the navigation bar to switch between sections
2. **Mobile Menu**: On mobile devices, click the hamburger menu to access the sidebar
3. **Direct Linking**: Use hash URLs to link directly to sections (e.g., `#publications`, `#research`)
4. **Social Links**: Access external profiles via sidebar social media links

### Content Sections

| Section | Purpose |
|---------|---------|
| **Publications** | Display of peer-reviewed research papers and journal articles |
| **Talks** | Conference presentations, seminars, and public speaking engagements |
| **Teaching** | Course materials, syllabi, and educational resources |
| **Projects** | Portfolio of research projects and technical implementations |
| **Research** | Detailed research areas, methodologies, and focus areas |
| **CV** | Complete curriculum vitae and professional credentials |
| **Blog** | Technical articles, research insights, and discussions |
| **Photography** | Professional photography gallery and creative work |

## Features & Functionality

### JavaScript Functionality

- **Tab Switching**: Dynamically switch between content sections with smooth scrolling
- **Mobile Menu Toggle**: Responsive hamburger menu for mobile navigation
- **Hash-based Routing**: URLs update to reflect current section for bookmarking
- **Overlay Functionality**: Overlay backdrop for mobile menu interaction

### Responsive Breakpoints

The design includes media queries for optimal viewing across:
- Desktop devices (1024px and above)
- Tablets (768px to 1023px)
- Mobile phones (below 768px)

## Customization

### Updating Profile Information

Edit the following in `index.html`:
- Profile image path in `profile-img src`
- Name and title in the profile section
- Bio and professional description
- Contact information and academic identifiers
- Social media links and ORCID number

### Adding Content

To add new publications, talks, or other content:
1. Navigate to the corresponding section in `index.html`
2. Follow the existing HTML structure
3. Test the layout responsiveness

### Styling Modifications

- Edit `style.css` for global style changes
- Modify CSS variables for color scheme customization
- Update Font Awesome class names for different icons

## Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Static file delivery optimized for fast loading
- Minimal JavaScript dependencies for reduced load time
- External CDN usage for icon and font libraries
- Responsive images for various display sizes

## Best Practices

- Validate HTML structure before updates
- Test responsiveness across multiple device sizes
- Ensure all external links are functional
- Maintain consistent styling and typography
- Keep social media and contact information current

## Contributing

This is a personal academic portfolio. For suggestions or technical improvements, please contact the author directly.

## License

© 2026 Dr. Paraj. All rights reserved.

Department of Electronics & Electrical Engineering • IIT Guwahati

## Contact Information

- **Email**: paraj@iitg.ac.in
- **Affiliation**: Associate Professor, Department of EEE, IIT Guwahati
- **ORCID**: xxxx-xxxx-xxxx-xxxx
- **GitHub**: [iparaj](https://github.com/iparaj)

## Additional Resources

- [IIT Guwahati Department of EEE](https://www.iitg.ac.in/)
- [IEEE Xplore](https://ieeexplore.ieee.org/)
- [Google Scholar](https://scholar.google.com/)
- [ResearchGate](https://www.researchgate.net/)

---

**Last Updated**: February 2026

For the latest version of this website, visit the live deployment or clone this repository.