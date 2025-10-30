// Sample encyclopedia data - replace with your actual data source
const encyclopediaData = {
    "encyclopedia_001": {
        id: "encyclopedia_001",
        category: "Equipment & Technology",
        term: "EMF (Electromagnetic Field) Meter",
        alternateNames: ["EMF Detector", "Electromagnetic Field Detector", "Ghost Meter"],
        description: "An Electronic Magnetic Field (EMF) meter is one of the most commonly used instruments in paranormal investigation, designed to detect and measure fluctuations in electromagnetic fields. The device registers electromagnetic radiation in the environment, typically measuring in milligauss (mG) or microtesla (μT). Paranormal researchers theorize that spirits may manipulate electromagnetic fields when manifesting or attempting to communicate, causing detectable spikes in EMF readings.",
        history: "EMF meters were originally developed for industrial and safety purposes—electricians used them to detect faulty wiring, power lines, and electrical hazards. The paranormal investigation community adopted EMF meters in the 1970s and 1980s based on the theory that ghosts require or emit energy to manifest. Early ghost hunters noticed that areas with reported paranormal activity sometimes showed unusual electromagnetic readings, leading to the instrument's widespread adoption. The practice gained mainstream attention through television shows like 'Ghost Hunters' in the 2000s, making EMF meters synonymous with ghost hunting.",
        technicalSpecs: "Standard EMF meters measure frequencies from 50-60 Hz (the frequency of household electricity) up to several hundred Hz. Baseline readings in a normal environment typically range from 0.1 to 3 milligauss. Readings above 5-7 mG are considered elevated and warrant investigation. Most paranormal investigators use analog meters (with needle displays) or digital meters with LED indicators. The K-II meter, a modified EMF detector with colored lights, became popular due to its simple visual interface. Natural sources of EMF include electrical wiring, appliances, cell phones, power lines, and solar storms.",
        properUse: "Investigators should first conduct a thorough baseline sweep of the location during daylight hours, mapping all natural EMF sources including wiring, circuit breakers, appliances, electronics, and external power sources. Mark these areas clearly to avoid false positives during investigation. During active investigation, hold the meter steady and avoid rapid movements that can cause false readings. Watch for sudden spikes (2+ mG increase) rather than steady elevated readings, which usually indicate proximity to electrical sources. Multiple meters should confirm anomalous readings. Document all spikes with time, location, and environmental conditions. Always rule out natural explanations first—cell phones, walkie-talkies, cameras, and even the investigator's own equipment can trigger readings.",
        commonMisconceptions: "Many believe any EMF reading indicates paranormal activity, when in fact most readings have mundane explanations. Old wiring, hidden electrical sources, and even underground power lines can cause elevated readings. The theory that ghosts generate EMF is unproven speculation, not scientific fact. Some locations are simply 'electrically noisy' due to infrastructure. Critics argue that prolonged exposure to strong EMF can cause feelings of unease, dizziness, and paranoia—symptoms often attributed to ghosts but potentially caused by the electromagnetic fields themselves. This 'fear cage' phenomenon suggests some hauntings may actually be physiological responses to environmental EMF rather than genuine paranormal activity.",
        notableUses: "EMF meters have been used at thousands of reportedly haunted locations worldwide. At the Lizzie Borden House in Fall River, Massachusetts, investigators consistently report EMF spikes in the room where Abby Borden was murdered. The Eastern State Penitentiary in Philadelphia shows elevated EMF in Cell Block 12, where visitors report the most intense paranormal experiences. At the Villisca Axe Murder House in Iowa, EMF readings spike in the children's bedroom where six victims died. The Queen Mary ship in Long Beach, California, shows anomalous readings in the engine room where a crew member was crushed to death. Skeptics note that old buildings often have degraded wiring and hidden electrical sources that explain these readings.",
        relatedTerms: ["K-II Meter", "Trifield Meter", "Ghost Box", "Environmental Monitoring", "Baseline Reading"],
        scientificPerspective: "Mainstream science does not support the theory that electromagnetic fields indicate ghostly presence. There is no peer-reviewed scientific evidence linking EMF fluctuations to paranormal activity. However, research does show that exposure to strong electromagnetic fields can affect the human brain, potentially causing hallucinations, feelings of being watched, and other experiences associated with hauntings. The 'God Helmet' experiments by neuroscientist Michael Persinger demonstrated that electromagnetic stimulation of the temporal lobes could induce mystical experiences and sensed presences. This suggests some haunted locations may be 'haunted' by electromagnetic fields rather than spirits.",
        safetyConsiderations: "Prolonged exposure to high EMF levels (above 10 mG) may pose health risks including headaches, fatigue, and in extreme cases, increased cancer risk. Investigators should limit time in areas with consistently high EMF readings. Pregnant investigators should be especially cautious. EMF meters themselves are safe to use and pose no health risks. Always identify and avoid high-voltage sources like power substations, electrical panels, and high-tension wires.",
        imageDescription: "A handheld EMF meter with digital display showing a reading of 3.2 milligauss, five LED indicator lights (green, yellow, orange, red, red), and a black plastic case with measurement grid lines in the background."
    }
    // Add more entries here...
};

// Load article data into the page
function loadArticle(articleId) {
    const article = encyclopediaData[articleId];
    
    if (!article) {
        console.error('Article not found:', articleId);
        return;
    }

    // Set title and meta
    document.getElementById('article-title').textContent = article.term;
    document.getElementById('category-badge').textContent = article.category;
    document.title = `${article.term} - Parapediaz`;

    // Set alternate names
    if (article.alternateNames && article.alternateNames.length > 0) {
        document.getElementById('alternate-names').textContent = article.alternateNames.join(', ');
        document.getElementById('alternate-names-box').style.display = 'block';
    } else {
        document.getElementById('alternate-names-box').style.display = 'none';
    }

    // Set description
    document.getElementById('description-text').textContent = article.description;

    // Set sections
    document.getElementById('history-text').textContent = article.history || '';
    document.getElementById('technical-text').textContent = article.technicalSpecs || '';
    document.getElementById('proper-use-text').textContent = article.properUse || '';
    document.getElementById('misconceptions-text').textContent = article.commonMisconceptions || '';
    document.getElementById('notable-uses-text').textContent = article.notableUses || '';
    document.getElementById('scientific-text').textContent = article.scientificPerspective || '';
    document.getElementById('safety-text').textContent = article.safetyConsiderations || '';

    // Handle image if available
    if (article.imageUrl) {
        const imgContainer = document.getElementById('article-image-container');
        const img = document.getElementById('article-image');
        const caption = document.getElementById('image-caption');
        
        img.src = article.imageUrl;
        img.alt = article.term;
        caption.textContent = article.imageDescription || '';
        imgContainer.style.display = 'block';
    } else {
        document.getElementById('article-image-container').style.display = 'none';
    }

    // Populate related terms (See Also)
    const seeAlsoList = document.getElementById('see-also-list');
    seeAlsoList.innerHTML = '';
    if (article.relatedTerms && article.relatedTerms.length > 0) {
        article.relatedTerms.forEach(term => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${term.toLowerCase().replace(/\s+/g, '-')}`;
            a.textContent = term;
            li.appendChild(a);
            seeAlsoList.appendChild(li);
        });
    }

    // Populate related terms sidebar
    const relatedTermsList = document.getElementById('related-terms');
    relatedTermsList.innerHTML = '';
    if (article.relatedTerms && article.relatedTerms.length > 0) {
        article.relatedTerms.forEach(term => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${term.toLowerCase().replace(/\s+/g, '-')}`;
            a.textContent = term;
            li.appendChild(a);
            relatedTermsList.appendChild(li);
        });
    }

    // Hide sections that don't have content
    toggleSection('history-section', article.history);
    toggleSection('technical-section', article.technicalSpecs);
    toggleSection('proper-use-section', article.properUse);
    toggleSection('misconceptions-section', article.commonMisconceptions);
    toggleSection('notable-uses-section', article.notableUses);
    toggleSection('scientific-section', article.scientificPerspective);
    toggleSection('safety-section', article.safetyConsiderations);
    toggleSection('see-also-section', article.relatedTerms && article.relatedTerms.length > 0);

    // Generate table of contents
    generateTableOfContents();

    // Scroll to top
    window.scrollTo(0, 0);
}

// Toggle section visibility based on content
function toggleSection(sectionId, hasContent) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = hasContent ? 'block' : 'none';
    }
}

// Generate table of contents from visible h2 headings
function generateTableOfContents() {
    const toc = document.getElementById('toc');
    toc.innerHTML = '';

    const headings = document.querySelectorAll('.article-body h2');
    headings.forEach((heading, index) => {
        // Skip if parent section is hidden
        const section = heading.closest('section');
        if (section && section.style.display === 'none') {
            return;
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        
        // Create anchor ID if it doesn't exist
        if (!heading.id) {
            heading.id = `section-${index}`;
        }
        
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        
        li.appendChild(a);
        toc.appendChild(li);
    });
}

// Search functionality
function performSearch() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    // Simple search through encyclopedia data
    const results = Object.values(encyclopediaData).filter(entry => {
        return entry.term.toLowerCase().includes(searchTerm) ||
               entry.description.toLowerCase().includes(searchTerm) ||
               entry.alternateNames.some(name => name.toLowerCase().includes(searchTerm));
    });

    if (results.length > 0) {
        // Load first result
        loadArticle(results[0].id);
    } else {
        alert('No results found for: ' + searchTerm);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load default article
    loadArticle('encyclopedia_001');

    // Search button
    document.getElementById('search-btn').addEventListener('click', performSearch);

    // Search on Enter key
    document.getElementById('search-box').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Export function for adding more articles dynamically
function addArticle(articleData) {
    encyclopediaData[articleData.id] = articleData;
}

// Export function for external use
window.ParapediazAPI = {
    loadArticle: loadArticle,
    addArticle: addArticle,
    getAllArticles: () => Object.values(encyclopediaData)
};
