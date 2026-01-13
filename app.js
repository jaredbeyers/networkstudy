// Network+ Acronyms and their definitions
const acronyms = [
    { acronym: 'OSI', answer: 'Open Systems Interconnection' },
    { acronym: 'IDS', answer: 'Intrusion Detection System' },
    { acronym: 'IPS', answer: 'Intrusion Prevention System' },
    { acronym: 'NAS', answer: 'Network Attached Storage' },
    { acronym: 'SAN', answer: 'Storage Area Network' },
    { acronym: 'NFV', answer: 'Network Functions Virtualization' },
    { acronym: 'VPC', answer: 'Virtual Private Cloud' },
    { acronym: 'SaaS', answer: 'Software as a Service' },
    { acronym: 'IaaS', answer: 'Infrastructure as a Service' },
    { acronym: 'PaaS', answer: 'Platform as a Service' },
    { acronym: 'FTP', answer: 'File Transfer Protocol' },
    { acronym: 'SFTP', answer: 'Secure File Transfer Protocol' },
    { acronym: 'SSH', answer: 'Secure Shell' },
    { acronym: 'Telnet', answer: 'Telecommunication Network' },
    { acronym: 'SMTP', answer: 'Simple Mail Transfer Protocol' },
    { acronym: 'DNS', answer: 'Domain Name System' },
    { acronym: 'DHCP', answer: 'Dynamic Host Configuration Protocol' },
    { acronym: 'HTTP', answer: 'Hypertext Transfer Protocol' },
    { acronym: 'HTTPS', answer: 'Hypertext Transfer Protocol Secure' },
    { acronym: 'SNMP', answer: 'Simple Network Management Protocol' },
    { acronym: 'LDAP', answer: 'Lightweight Directory Access Protocol' },
    { acronym: 'RDP', answer: 'Remote Desktop Protocol' },
    { acronym: 'SIP', answer: 'Session Initiation Protocol' },
    { acronym: 'SC', answer: 'Subscriber Connector' },
    { acronym: 'LC', answer: 'Lucent Connector' },
    { acronym: 'ST', answer: 'Straight Tip' },
    { acronym: 'MPO', answer: 'Multi-fiber Push-On' },
    { acronym: 'RJ11', answer: 'Registered Jack 11' },
    { acronym: 'RJ45', answer: 'Registered Jack 45' },
    { acronym: 'F-type', answer: 'F-type Connector' },
    { acronym: 'BNC', answer: 'Bayonet Neill-Concelman' },
    { acronym: 'APIPA', answer: 'Automatic Private IP Addressing' },
    { acronym: 'RFC1918', answer: 'Request for Comments 1918' },
    { acronym: 'VLSM', answer: 'Variable Length Subnet Masking' },
    { acronym: 'CIDR', answer: 'Classless Inter-Domain Routing' },
    { acronym: 'BGP', answer: 'Border Gateway Protocol' },
    { acronym: 'EIGRP', answer: 'Enhanced Interior Gateway Routing Protocol' },
    { acronym: 'OSPF', answer: 'Open Shortest Path First' },
    { acronym: 'NAT', answer: 'Network Address Translation' },
    { acronym: 'PAT', answer: 'Port Address Translation' },
    { acronym: 'FHRP', answer: 'First Hop Redundancy Protocol' },
    { acronym: 'VIP', answer: 'Virtual IP' },
    { acronym: 'VLAN', answer: 'Virtual Local Area Network' },
    { acronym: 'VLANs', answer: 'Virtual Local Area Networks' },
    { acronym: 'MTU', answer: 'Maximum Transmission Unit' },
    { acronym: 'SSID', answer: 'Service Set Identifier' },
    { acronym: 'IPAM', answer: 'IP Address Management' },
    { acronym: 'SLA', answer: 'Service Level Agreement' },
    { acronym: 'EOL', answer: 'End of Life' },
    { acronym: 'EOS', answer: 'End of Support' },
    { acronym: 'RPO', answer: 'Recovery Point Objective' },
    { acronym: 'RTO', answer: 'Recovery Time Objective' },
    { acronym: 'MTTR', answer: 'Mean Time To Repair' },
    { acronym: 'MTBF', answer: 'Mean Time Between Failures' },
    { acronym: 'SLAAC', answer: 'Stateless Address Autoconfiguration' },
    { acronym: 'NTP', answer: 'Network Time Protocol' },
    { acronym: 'PTP', answer: 'Precision Time Protocol' },
    { acronym: 'NTS', answer: 'Network Time Security' },
    { acronym: 'VPN', answer: 'Virtual Private Network' },
    { acronym: 'VPNs', answer: 'Virtual Private Networks' },
    { acronym: 'GUI', answer: 'Graphical User Interface' },
    { acronym: 'API', answer: 'Application Programming Interface' },
    { acronym: 'PKI', answer: 'Public Key Infrastructure' },
    { acronym: 'IAM', answer: 'Identity and Access Management' },
    { acronym: 'MFA', answer: 'Multi-Factor Authentication' },
    { acronym: 'SSO', answer: 'Single Sign-On' },
    { acronym: 'RADIUS', answer: 'Remote Authentication Dial-In User Service' },
    { acronym: 'SAML', answer: 'Security Assertion Markup Language' },
    { acronym: 'TACACS+', answer: 'Terminal Access Controller Access-Control System Plus' },
    { acronym: 'CIA', answer: 'Confidentiality Integrity Availability' },
    { acronym: 'PCI DSS', answer: 'Payment Card Industry Data Security Standard' },
    { acronym: 'GDPR', answer: 'General Data Protection Regulation' },
    { acronym: 'IoT', answer: 'Internet of Things' },
    { acronym: 'IIoT', answer: 'Industrial Internet of Things' },
    { acronym: 'SCADA', answer: 'Supervisory Control and Data Acquisition' },
    { acronym: 'ICS', answer: 'Industrial Control System' },
    { acronym: 'OT', answer: 'Operational Technology' },
    { acronym: 'BYOD', answer: 'Bring Your Own Device' },
    { acronym: 'DoS', answer: 'Denial of Service' },
    { acronym: 'DDoS', answer: 'Distributed Denial of Service' },
    { acronym: 'ARP', answer: 'Address Resolution Protocol' },
    { acronym: 'MAC', answer: 'Media Access Control' },
    { acronym: 'NAC', answer: 'Network Access Control' },
    { acronym: 'ACL', answer: 'Access Control List' },
    { acronym: 'ACLs', answer: 'Access Control Lists' },
    { acronym: 'URL', answer: 'Uniform Resource Locator' },
    { acronym: 'STP', answer: 'Spanning Tree Protocol' },
    { acronym: 'TX', answer: 'Transmit' },
    { acronym: 'RX', answer: 'Receive' },
    { acronym: 'PoE', answer: 'Power over Ethernet' },
    { acronym: '802.11', answer: 'IEEE 802.11 Wireless LAN Standard' }
];

// Game state
let currentIndex = 0;
let shuffledAcronyms = [];
let score = 0;
let totalAnswered = 0;
let correctAnswers = 0;

// DOM elements
const acronymElement = document.getElementById('acronym');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const skipBtn = document.getElementById('skip-btn');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const accuracyElement = document.getElementById('accuracy');
const progressFill = document.getElementById('progress-fill');

// Normalize answer for comparison (remove extra spaces, convert to lowercase)
function normalizeAnswer(answer) {
    return answer.trim().toLowerCase().replace(/\s+/g, ' ');
}

// Check if user answer matches (allowing for variations)
function checkAnswer(userAnswer, correctAnswer) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);
    
    // Exact match
    if (normalizedUser === normalizedCorrect) {
        return true;
    }
    
    // Check if user answer contains all key words from correct answer
    const correctWords = normalizedCorrect.split(' ').filter(word => word.length > 2);
    const userWords = normalizedUser.split(' ');
    
    // If user answer has all key words, consider it correct
    const hasAllKeyWords = correctWords.every(word => 
        userWords.some(userWord => userWord.includes(word) || word.includes(userWord))
    );
    
    return hasAllKeyWords && correctWords.length > 0;
}

// Show feedback
function showFeedback(message, type) {
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback show ${type}`;
}

// Update stats
function updateStats() {
    scoreElement.textContent = correctAnswers;
    totalElement.textContent = totalAnswered;
    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    accuracyElement.textContent = `${accuracy}%`;
    
    const progress = shuffledAcronyms.length > 0 
        ? ((currentIndex) / shuffledAcronyms.length) * 100 
        : 0;
    progressFill.style.width = `${progress}%`;
}

// Load next acronym
function loadNextAcronym() {
    if (currentIndex >= shuffledAcronyms.length) {
        // Quiz complete
        showFeedback(
            `Quiz Complete! You got ${correctAnswers} out of ${totalAnswered} correct (${Math.round((correctAnswers / totalAnswered) * 100)}% accuracy).`,
            'info'
        );
        submitBtn.disabled = true;
        skipBtn.disabled = true;
        answerInput.disabled = true;
        resetBtn.style.display = 'inline-block';
        return;
    }
    
    const current = shuffledAcronyms[currentIndex];
    acronymElement.textContent = current.acronym;
    answerInput.value = '';
    answerInput.focus();
    feedbackElement.className = 'feedback';
    updateStats();
}

// Submit answer
function submitAnswer() {
    const userAnswer = answerInput.value.trim();
    
    // If no answer provided, treat as skip
    if (!userAnswer) {
        skipAcronym();
        return;
    }
    
    const current = shuffledAcronyms[currentIndex];
    const isCorrect = checkAnswer(userAnswer, current.answer);
    
    totalAnswered++;
    
    if (isCorrect) {
        correctAnswers++;
        showFeedback(`✓ Correct! ${current.acronym} stands for "${current.answer}"`, 'correct');
        updateStats();
        currentIndex++;
        
        // Quick transition for correct answers
        setTimeout(() => {
            loadNextAcronym();
        }, 800);
    } else {
        showFeedback(`✗ Incorrect. ${current.acronym} stands for "${current.answer}"`, 'incorrect');
        updateStats();
        currentIndex++;
        
        // Longer wait for incorrect answers to read the correct answer
        setTimeout(() => {
            loadNextAcronym();
        }, 2000);
    }
}

// Skip current acronym
function skipAcronym() {
    const current = shuffledAcronyms[currentIndex];
    
    // Count skip as incorrect
    totalAnswered++;
    // correctAnswers is not incremented, so it counts as incorrect
    
    showFeedback(`✗ Skipped (marked incorrect). ${current.acronym} stands for "${current.answer}"`, 'incorrect');
    updateStats();
    currentIndex++;
    
    setTimeout(() => {
        loadNextAcronym();
    }, 2000);
}

// Start quiz
function startQuiz() {
    // Shuffle acronyms
    shuffledAcronyms = [...acronyms].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;
    totalAnswered = 0;
    correctAnswers = 0;
    
    startBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    submitBtn.disabled = false;
    skipBtn.disabled = false;
    answerInput.disabled = false;
    
    loadNextAcronym();
}

// Reset quiz
function resetQuiz() {
    startQuiz();
}

// Event listeners
submitBtn.addEventListener('click', submitAnswer);
skipBtn.addEventListener('click', skipAcronym);
startBtn.addEventListener('click', startQuiz);
resetBtn.addEventListener('click', resetQuiz);

// Allow Enter key to submit
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !submitBtn.disabled) {
        submitAnswer();
    }
});

// Initialize
updateStats();
