# Captcha Decoder and AI-Resistant CAPTCHA Countermessure System
This project explores the vulnerabilities of traditional CAPTCHA systems in the age of AI and deep learning, and proposes a robust, interactive, **clock-based CAPTCHA mechanism** that is resistant to automated attacks.

## Overview

With the evolution of deep learning and computer vision, AI models are now capable of decoding most traditional alphanumeric CAPTCHAs with high accuracy. This poses a serious threat to web security.

This project is divided into two parts:
1. **CAPTCHA Decoding**: Using Convolutional Neural Networks (CNNs) like MobileNetV2 and Xception to decode standard alphanumeric CAPTCHAs.
2. **AI-Resistant Countermeasure**: Proposing and implementing a novel **canvas clock CAPTCHA** that requires users to set the correct time on an interactive analog clock—something difficult for bots to solve.

## Key Features 

### CAPTCHA Decoding using AI
- Train and evaluate CNN models to decode traditional alphanumeric CAPTCHA images.
- Models used: `MobileNetV2`, `Xception`
- High accuracy achieved on static CAPTCHAs.

### Interactive Clock-Based CAPTCHA (AI-Resistant)
- User must **set the correct time** on a canvas clock.
- Interaction validated via user input rather than simple image recognition.
- Resilient against CNN-based attacks and OCR tools like Tesseract.
- Combines **human intuition and interaction** to create a secure authentication step.

## Tech Stack  

### AI and Machine Learning
- **Python**
- **TensorFlow / Keras** – For training CNN models
- **OpenCV** – Image preprocessing

### Web Application
- **HTML, CSS, JavaScript** – Frontend for the interactive clock CAPTCHA
- **Canvas API** – For rendering and interacting with the analog clock
- **Flask (Python)** – Backend for serving the CAPTCHA challenge and handling user validation

## Conclusion

This project demonstrates the increasing vulnerability of traditional CAPTCHA systems against modern AI and proposes a novel, human-centric solution. The interactive canvas clock CAPTCHA resists AI-driven attacks by incorporating user interaction that is difficult for machines to simulate, offering a **secure and intuitive alternative** to outdated CAPTCHA formats.
