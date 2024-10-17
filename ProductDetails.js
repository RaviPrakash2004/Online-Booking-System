import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const loggedIn = sessionStorage.getItem('username');

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [productId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Custom validation: Check if any required field is empty
    const requiredFields = ['title', 'price', 'description'];
    const hasEmptyFields = requiredFields.some((field) => !product[field]);

    if (hasEmptyFields) {
      toast.error('Please fill in all required fields.');
      return;
    }

    axios
      .put(`http://localhost:3001/products/${productId}, product`)
      .then((response) => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const renderDescription = () => {
    // Example of rendering different descriptions based on product ID
    switch (productId) {
      case '1':
        return (
          <>
            <li><p>FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back.
          t also features a Ceramic Shield front that’s tougher than any smartphone glass.
           And it’s splash, water, and dust resistant.</p></li>
            <li><p>ADVANCED DISPLAY — The 6.7” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance. Dynamic Island bubbles up alerts and Live Notifications. Plus, with Always-On display, your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know.</p></li>
            <li><p>GAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.
            </p></li>
            <li><p>POWERFUL PRO CAMERA SYSTEM — Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more color and detail using the 48MP Main camera. And take sharper close-ups from farther away with the 5x Telephoto camera on iPhone 15 Pro Max.</p></li>
            <li><p>CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to your favorite feature. Just set the one you want, like Silent mode, Camera, Voice Memo, Shortcut, and more. Then press and hold to launch the action.</p></li>
          </>
        );
      case '2':
        return (
          <>
            <li><p>DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.</p></li>
            <li><p>INNOVATIVE DESIGN — iPhone 15 features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass. And the 6.1" Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14.</p></li>
            <li><p>48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.</p></li>
            <li><p>NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.</p></li>
            <li><p>POWERHOUSE A16 BIONIC CHIP — The superfast chip powers advanced features like computational photography, fluid Dynamic Island transitions, and Voice Isolation for phone calls. And A16 Bionic is incredibly efficient to help deliver great all-day battery life.</p></li>
            
          </>
        );
      case '3':
        return (
          <>
           <li><p>Powerful Performance: Equipped with 12GB of RAM and 128GB of storage for seamless multitasking and ample space for apps and media.</p></li>
            <li><p>5G Connectivity: Enjoy lightning-fast internet speeds for smooth streaming, gaming, and browsing experiences.</p></li>
            <li><p>Advanced Camera System: Capture stunning images and videos with ease, perfect for photography enthusiasts.</p></li>
            <li><p>Sleek Design: Featuring a sleek and modern design that stands out in the crowd.</p></li>
            <li><p>Immersive Multimedia Experience: High-resolution display and immersive audio for an exceptional multimedia experience</p></li>
          </>
        );
      case '4':
          return (
            <>
             <li><p>Display: 6.67" FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 1000nits peak brightness; </p></li>
              <li><p>Corning Gorilla Glass 5 Display Protection</p></li>
              <li><p>Processor:Mediatek Dimensity 6080 6nm Octa-core 5G processor for high performance ; Up to 2.4GHz; Upto 12GB RAM </p></li>
              <li><p>including 6GB Virtual RAM</p></li>
              <li><p>Camera: 108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 16MP Front camera</p></li>
              <li><p>Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity</p></li>
              <li><p>Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 | Dual SIM (nano+nano) 5G</p></li>
            </>
          );
      case '5':
            return (
              <>
               <li><p>Pixel 7a is fast and efficient, with 8 GB of RAM, an amazing camera, and features rated highest in security</p></li>
                <li><p>Pixel 7a has a 24-hour battery life and supports fast charging up to 72 hours with Extreme Battery Saver turned on.</p></li>
                <li><p>With the Pixel Camera and Tensor G2’s advanced image processing, it’s easy to take great pictures in low light, fix blurry images, and remove distractions with a few taps in Photos</p></li>
                <li><p>With Pixel Call Assist, you can get help making calls, avoiding spammers, and waiting on hold; plus, Pixel 7a can filter out your caller’s background noise so you can hear them clearly even in noisy places</p></li>
                <li><p>Open your Pixel 7a quickly and securely with Face Unlock or Fingerprint Unlock</p></li>
              </>
            );
      case '6':
              return (
                <>
                 <li><p>Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro lens; 16MP Front (Selfie) Camera</p></li>
                  <li><p>Camera Features: Ultra Steady Mode, Dual-view Video, HDR, Nightscape, Portrait Mode, Video Portrait, Pano, Macro, Slo-mo, Time-lapse, Text-scanner, Retouching, Filters, Google Lens, Extra HD, Pro Mode</p></li>
                  <li><p>Display: 6.7 Inches; 120 Hz AMOLED FHD+, Resolution: 2412 x 1080 pixels; HDR 10+, sRGB, 10-bit Color Depth, 93.4% Screen to body ratio</p></li>
                  <li><p>Operating System: OxygenOS 13 based on Android 13.1</p></li>
                  <li><p>Processor: Qualcomm Snapdragon 782G Mobile Platform</p></li>
                </>
              );
      case '7':
                return (
                  <>
                   <li><p>Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual</p></li>
                    <li><p>Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection</p></li>
                    <li><p>Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera</p></li>
                    <li><p>5000mAh(typ) battery with 22.5W charger in-box</p></li>
                    <li><p>MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating</p></li>
                  </>
                );
      case '8':
                  return (
                    <>
                     <li><p>DISPLAY - 16.83 Centimeters (6.6"Inch) Super AMOLED Display with 19.5:9 Aspect Ratio, FHD+ Resolution with 2340 x 1080 Pixels , 389 PPI with 16M Colors and 120Hz Refresh Rate, Corning Gorilla Glass Victus+</p></li>
                      <li><p>CAMERA - Nightography | Super HDR Video | 50MP (F1.8) Main Wide Angle Camera + 12MP (F2.2) Ultra Wide Camera + 5MP (F2.4) Macro Camera | 32MP (F2.2) Front Camera | Video Maximum Resolution of Ultra HD 4K (3840 x 2160) @30fps</p></li>
                      <li><p>INTERFACE & PROCESSOR - Latest Android 14 Operating System having One UI 6.1 platform with Samsung Exynos 1480 Processor | 2.75GHz, 2GHz 4nm Octa-Core Processor</p></li>
                      <li><p>BATTERY - Get a massive 5000mAh Lithium-ion Battery (Non-Removable) with C-Type Super Fast Charging (25W Charging Support)</p></li>
                      <li><p>OS UPDATES & SECURITY - Get upto 4 Generations of AndroidOS Upgrades & 5 Years of Security Updates with Samsung Galaxy A55. Includes 1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories.</p></li>
                    </>
                  );
        case '9':
                    return (
                      <>
                       <li><p>Display: 6.67" FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 1000nits peak brightness; Corning Gorilla Glass 5 Display Protection</p></li>
                        <li><p>Processor:Mediatek Dimensity 6080 6nm Octa-core 5G processor for high performance ; Up to 2.4GHz; Upto 12GB RAM including 6GB Virtual RAM</p></li>
                        <li><p>Camera: 108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 16MP Front camera</p></li>
                        <li><p>Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity</p></li>
                        <li><p>Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 | Dual SIM (nano+nano) 5G</p></li>
                      </>
                    );
        case '10':
                      return (
                        <>
                         <li><p>50MP Flagship Sony IMX890 Night vision camera with OIS, the largest sensor in the segment, 56% more light intake, 8MP Camera and 2MP lens, 16MP Front (Selfie) Camera</p></li>
                          <li><p>Horizon Glass Design : The 1st Glass Design in the segment with the better handling</p></li>
                          <li><p>Display: 6.67 Inches; 120 Hz AMOLED FHD+, Resolution: 2412 x 1080 pixels</p></li>
                          <li><p>Fast and long lasting battery - 5000mAh high performance battery and 67W Flashchage, 50% charge in 11 min</p></li>
                          <li><p>Air Gesture：one more way to interact, navigate through certain features of the smartphone without involving any physical contact</p></li>
                        </>
                      );
        case '11':
                        return (
                          <>
                           <li><p>Snapdragon 8 Gen 3 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual</p></li>
                            <li><p>Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection</p></li>
                            <li><p>Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera</p></li>
                            <li><p>5000mAh(typ) battery with 22.5W charger in-box</p></li>
                            <li><p>MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating</p></li>
                          </>
                        );
        case '12':
                    return (
                      <>
                       <li><p>Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8") flat display. It's an absolute marvel of design.</p></li>
                        <li><p>The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display.</p></li>
                        <li><p>With the most megapixels on a smartphone and AI processing, Galaxy S24 Ultra sets the industry standard for image quality every time you hit the shutter. What's more, the new ProVisual engine recognizes objects — improving colour tone, reducing noise and bringing out detail.</p></li>
                        <li><p>A new way to search is here with Circle to Search. While scrolling your fav social network, use your S Pen or finger to circle something and get Google Search results.</p></li>
                        <li><p>Victory can be yours with the new Snapdragon 8 Gen 3 for Galaxy. Faster processing gives you the power you need for all the gameplay you want. Then, manifest graphic effects in real time with ray tracing for hyper-realistic shadows and reflections.</p></li>
                      </>
                    );
        case '13':
                    return (
                      <>
                       <li><p>(8 GB RAM,128 GB UFS2.2 ROM); Upto 16GB Expandable RAM</p></li>
                        <li><p>50 MP AI Dual Camera</p></li>
                        <li><p>18W Fast Charger with Type C USB Cable</p></li>
                        <li><p>Unisoc T616 Processor (Antutu score 250k+)</p></li>
                        <li><p>Punch Hole display with 90 Hz Refresh rate and Anonymous Auto call recording</p></li>
                      </>
                    );
        case '14':
                    return (
                      <>
                       <li><p>6 GB RAM | 128 GB ROM</p></li>
                        <li><p>16.71 cm (6.58 inch) Full HD+ Display</p></li>
                        <li><p>50MP + 2MP | 8MP Front Camera</p></li>
                        <li><p>5000 mAh Battery</p></li>
                        <li><p>Dimensity 6020 Processor</p></li>
                      </>
                    );
        case '15':
                    return (
                      <>
                       <li><p>3.3 GHz Snapdragon 8 Gen 3 mobile platform, which is on 4nm TSMC Process. Enhanced graphic performance with Adreno 750. In addition to that, it has LPDRR5X RAM & UFS 4.0 storage.</p></li>
                        <li><p>50MP 1/1.3" Astrography Camera (f/1.68) + 50MP Ultra - Wide Angle Camera (f/1.20) + 64MP 3X Periscope Telephoto Camera (f/2.57) with 100X Digital zoom.</p></li>
                        <li><p>Brightest Display ever with 6.78" 144 Hz LTPO AMOLED display with 3000 nit peak brightness. SGS-certified for low blue light. 2160Hz PWM uses the persistence of human vision to control display brightness.</p></li>
                        <li><p>Supercomputing chip Q1, Symmetrical dual stereo speaker, 4D Game vibration, Large X-axis linear motor enhances the overall gaming experience.</p></li>
                        <li><p>Fully charged battery with 120W fast charger. IP64 rating provides ingress protection against dust/water under normal use. Funtouch OS 14 based on Android 14</p></li>
                      </>
                    );
        case '16':
                    return (
                      <>
                       <li><p>Premium Design & Display: Experience the iconic design heritage of Galaxy S23, specially crafted for all passionate Galaxy fans.</p></li>
                        <li><p>Camera: Experience Galaxy S23 FE’s cutting edge camera. All of your photos and videos can be epic when you use the various pro-grade features.</p></li>
                        <li><p>Performance: S23 FE offers a better & smoother gaming experience with powerful performance, intelligent display & long-lasting battery.</p></li>
                      </>
                    );
        case '17':
                    return (
                      <>
                       <li><p>16.95 cm (6.7-inch) Super Retina XDR display</p></li>
                        <li><p>Advanced camera system for better photos in any light</p></li>
                        <li><p>Cinematic mode now in 4K Dolby Vision up to 30 fps</p></li>
                        <li><p>Action mode for smooth, steady, handheld videos</p></li>
                        <li><p>Vital safety technology — Crash Detection calls for help when you can’t</p></li>
                        <li><p>All-day battery life and up to 26 hours of video playback</p></li>
                        <li><p>Industry-leading durability features with Ceramic Shield and water resistance</p></li>
                      </>
                    );
        case '18':
                    return (
                      <>
                       <li><p>Stands out. Stands up. Unfolds. The Galaxy Z Fold5 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means there's more screen and no black dot getting between you and the breathtaking Infinity Flex Display.</p></li>
                        <li><p>Do more than more with Multi View. Whether toggling between texts or catching up on emails, take full advantage of the expansive Main Screen with Multi View. PC-like power in your pocket transforms apps optimized with One UI to give you menus and more in a glance</p></li>
                        <li><p>New Taskbar for PC-like multitasking. Wipe out tasks in fewer taps. Add apps to the Taskbar for quick navigation and bouncing between windows when you're in the groove. And with App Pair, one tap launches up to three apps, all sharing one super-productive screen</p></li>
                        <li><p>Our toughest Samsung Galaxy foldables ever. From the inside out, Galaxy Z Fold5 is made with materials that are not only stunning, but stand up to life's bumps and fumbles. The front and rear panels, made with exclusive Corning Gorilla Glass Victus2, are ready to resist sneaky scrapes and scratches. With our toughest aluminum frame made with Armor Aluminum, this is one durable smartphone.</p></li>
                        <li><p>World’s first water resistant foldable smartphones. Be adventurous, rain or shine. You don't have to sweat the forecast when you've got one of the world's first water-resistant foldable smartphones.</p></li>
                      </>
                    );
        case '19':
                    return (
                      <>
                       <li><p>Extraordinary materials blend the best of both. Titanium alloy, carbon fiber, and more. Built to the hilt with aerospace materials – with no expense spared. TÜV Rheinland “reliable folding” certified to 1,000,000 folds.Extreme durability for more than 100 folds every day – lasting over 10 years.</p></li>
                        <li><p>Dual ProXDR displays Cover Display: 6.31” (16.03 cm) 2K resolution, Super Fluid AMOLED at 1440 Hz - Shielded by Ceramic Guard Dual-Displays: 7.82" (19.86 cm) 2K resolution, Flexi-fluid AMOLED 89.6% screen-to-body ratio at 1440 Hz - Shielded by Ultra Thin Glass</p></li>
                        <li><p>Main camera with OIS 48MP SONY LYT-T800 “Pixel Stacked” Sensor 1/1.43” sensor, 1.12μm, ƒ/1.65, AF Telephoto with OIS 64MP OV64B Sensor with 3X Optical Zoom 6X in-sensor zoom, 1/2” sensor, 0.7 μm, ƒ/2.6, AF Ultra-wide 48MP Sony IMX581 with 114o FOV 1/2” sensor, ƒ/2.2, AF</p></li>
                        <li><p>Minimum crease. Maximum smooth. Our patented Flexion hinge mechanism, 8-axis pressure relief, and under-display micro-weaving significantly reduce creases. The “waterdrop”-shaped tension relief mechanism ensures a larger bend radius, minimizing the display crease.</p></li>
                        <li><p>Processor: Qulacomm Snapdragon 8 Gen 2 Platform Ray tracing enabled</p></li>
                        <li><p>OxygenOS 13.2: Game-changing multitasking you’ll finally love using. Dual split screen and fast focus Drag and drop sharing Triple split-screen</p></li>
                      </>
                    );
        case '20':
                    return (
                      <>
                       <li><p>200MP Ultra-Clear Rear Camera, Master of Photography: HONOR 90 features a 200MP Ultra-Clear Main Camera with the largest 1/1.4-inch sensor in the segment, a 12MP Ultra Wide and Macro 2-in-1 Camera, and a 2MP Depth Camera and a 50MP Selfie camera and 100° wide FOV hardware to capture exquisite photos and videos.</p></li>
                        <li><p>120Hz Quad-Curved Floating AMOLED Display: The leading technology can correct the deform of images on the display, ensuring visual comfort. Equipped with a 6.7-inch/17.02cm quad-curved bezel-less display, HONOR 90 supports a high resolution of 2664x1200, 100% DCI-P3 color gamut, up to 1.07 billion colors, and segment leading peak HDR brightness of 1600 nits.</p></li>
                        <li><p>Risk-free Industry's first 3840Hz PWM Dimming: To promote eye health the HONOR 90 is equipped with the industry-leading Pulse Width Modulation (PWM) Dimming of 3840Hz, the highest in the industry, which maintains a more comfortable and flicker-free viewing experience and minimizes eye strain especially in dimly lit environments.</p></li>
                        <li><p>Extraordinary Performance: HONOR 90 is equipped with Qualcomm Snapdragon 7 Gen 1 Accelerated Edition 5G 4nm processor, which can provide exceptional performance and handle even the most intensive and demanding tasks with ease. The phone adopts a super-large arterial biomimetic VC with the Gen 3 high thermal conductivity graphite sheet and a full-scene AI intelligent thermal management system. Control temperature accurately, dissipate heat stably.</p></li>
                        <li><p>Honor MagicOS 7.1: Powered by Android 13, Magic OS 7.1 is an all-scenario smart collaborative OS. With extensive Google services like Google Voice Assistant, Google Chrome, Google Maps, and more, Honor 90 blends the best of both worlds. Microsoft supports the "Link to Windows" feature, which allows Honor 90 users to connect their phone to the PC.</p></li>
                      </>
                    );
        case '21':
                   return (
                      <>
                        <li><p>Processor: 13th Gen Intel Core i9-13980HX Processor 2.2 GHz (36M Cache, up to 5.6 GHz, 24 cores: 8 P-cores and 16 E-cores)</p></li>
                        <li><p>Memory: 16GB (8GB SO-DIMM *2) DDR5 4800 MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 1TB PCIe 4.0 NVMe M.2 SSD</p></li>
                        <li><p>Graphics: NVIDIA GeForce RTX 4060 Laptop GPU with MUX Switch + NVIDIA Advanced Optimus 8GB GDDR6 VRAM ROG Boost: 2420MHz* at 140W (2370MHz Boost Clock+50MHz OC, 115W+25W Dynamic Boost)</p></li>
                        <li><p>Display: 16-inch QHD+ 16:10 (2560 x 1600, WQXGA), 240Hz IPS-level Anti-glare display, ROG Nebula Display, 3ms, 500nits 1200:1 100% DCI-P3 %, Pantone Validated</p></li>
                        <li><p>Keyboard: Backlit Chiclet Keyboard 4-Zone RGB</p></li>
                      </>
                    );
        case '22':
                   return (
                      <>
                        <li><p>SUPERCHARGED BY M3 PRO OR M3 MAX — The Apple M3 Pro chip, with a 12-core CPU and 18-core GPU using hardware-accelerated ray tracing, delivers amazing performance for demanding workflows like manipulating gigapixel panoramas or compiling millions of lines of code. M3 Max, with an up to 16-core CPU and up to 40-core GPU, drives extreme performance for the most advanced workflows like rendering intricate 3D content or developing transformer models with billions of parameters.</p></li>
                        <li><p>UP TO 22 HOURS OF BATTERY LIFE — Go all day thanks to the power-efficient design of Apple silicon. MacBook Pro delivers the same exceptional performance whether it’s running on battery or plugged in.</p></li>
                        <li><p>RESPONSIVE UNIFIED MEMORY AND STORAGE — Up to 36GB (M3 Pro) or up to 128GB (M3 Max) of unified memory makes everything you do fast and fluid. Up to 4TB (M3 Pro) or up to 8TB (M3 Max) of superfast SSD storage launches apps and opens files in an instant.</p></li>
                        <li><p>BRILLIANT PRO DISPLAY — The 41.05 cm (16.2″) Liquid Retina XDR display features Extreme Dynamic Range; 1,000 nits of sustained brightness for stunning HDR content; up to 600 nits of brightness for SDR content; and pro reference modes for doing your best work on the go.</p></li>
                        <li><p>FULLY COMPATIBLE — All your pro apps run lightning fast — including Adobe Creative Cloud, Apple Xcode, Microsoft 365, SideFX Houdini, MathWorks MATLAB, Medivis SurgicalAR and many of your favourite iPhone and iPad apps. And with macOS, work and play on your Mac are even more powerful. Elevate your presence on video calls. Access information in all-new ways. And discover even more ways to personalise your Mac.</p></li>
                      </>
                    );
        case '23':  
                    return (
                      <>
                        <li><p>Processor: Intel Core Ultra 7 155H, 16C (6P + 8E + 2LPE) / 22T, Max Turbo up to 4.8Ghz| Cores:-16 | Threads:- 22 | Cache:- 24MB</p></li>
                        <li><p>OS: Pre-Loaded Windows 11 Home with Lifetime Validity |MS Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription</p></li>
                        <li><p>Memory and Storage: 32GB RAM LPDDR5x -7467 | 1TB SSD || Graphics: Integrated Intel Arc Graphics</p></li>
                        <li><p>Display: 14" WUXGA (1920x1200) OLED | Display: 400nits Glossy | 60Hz | 100pct. DCI-P3 | Display HDR True Black 500 | Dolby Vision | Eyesafe</p></li>
                        <li><p>Ports: 1x USB-A (USB 5Gbps / USB 3.2 Gen 1), Always On | 2x USB-C (Thunderbolt 4 / USB4 40Gbps), with USB PD 3.1 and DisplayPort 1.4 | 1x HDMI 2.1, up to 4K/60Hz | 1x Headphone / microphone combo jack (3.5mm)</p></li>
                      </>
                    );           
        case '24':
                   return (
                      <>
                        <li><p>New Intel Processor: Intel Core i7-13700HX Processor</p></li>
                        <li><p>Internal Specifications: Dual-channel DDR5 SDRAM support 16 (2*8) GB of DDR5 system memory, Upgradable up to 32 GB of DDR5 system memory</p></li>
                        <li><p>Display: 16.0" display with IPS (In-Plane Switching) technology, WUXGA 1920 x 1200, high-brightness (400 nits) Acer ComfyView LED-backlit TFT LCD, supporting 165 Hz, Grey to Grey 3 ms by Overdrive, Nvidia Advanced Optimus capable. 16:10 aspect ratio, sRGB 100%, Wide viewing angle up to 170 degrees, Ultra-slim design, Mercury free, environment friendly</p></li>
                        <li><p>Graphics: NVIDIA GeForce RTX 4050 with 6 GB of dedicated GDDR6 VRAM</p></li>
                        <li><p>Other Features: NVIDIA Advance Optimus, Liquid Metal 5th Gen Aeroblade 3D Fan, Full-Function Thunderbolt-4, HDMI 2.1</p></li>
                      </>
                    );
        case '25':
                   return (
                      <>
                        <li><p>Processor: Intel 13th Gen i7-13650HX, up to 4.90 GHz, 24MB , 14 Cores // RAM: 16 GB, 2 x 8 GB, DDR5, 4800 MHz // Storage: 1TB SSD</p></li>
                        <li><p>Software: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 with lifetime validity| McAfee Multi Device Security 15-month subscription</p></li>
                        <li><p>Display: 15.6" FHD 165Hz, 3ms, sRGB-100%, ComfortViewPlus, NVIDIA G-SYNC+DDS Display // Graphics: NVIDIA GeForce RTX 4060, 8 GB GDDR6 // Keyboard: US English 4-Zone RGB Backlit Keyboard with Numeric Keypad and G-Key</p></li>
                        <li><p>Ports: 1) HDMI 2.1, (3) SuperSpeed USB 3.2 Gen 1 Type-A, (1) USB-C 3.2 Gen 2 with Display Port Alt-Mode, (1) Headphone/Mic, (1) RJ45</p></li>
                      </>
                    );
        case '26':
                   return (
                      <>
                        <li><p>【20-core 14th Gen Intel Core i7-14700HX】Utilize the might of 28 threads and a 33MB L3 cache to dominate virtual battlefields. Stay cool in the heat of the action with OMEN Tempest Cooling.;【8GB NVIDIA GeForce RTX 4060 Laptop GPU】Unlock an immersive gaming experience with graphics that deliver AI-accelerated performance, enhanced 3D rendering, and hyper-efficient data processing.</p></li>
                        <li><p>【Popular games】Play all your favourite games like Valorant, Metro Exodus, Dirt 5, Assassin’s Creed Valhalla, Shadow of the Tomb Raider, Civilization VI, GTA 5, Gears of War 5 (Gears 5), and more.;【Upgraded memory and storage】Experience seamless gameplay with 1TB PCIe Gen4 NVMe TLC M.2 SSD, ensuring a lag-free performance. Effortlessly handle demanding gaming applications with 16GB DDR5 RAM.</p></li>
                        <li><p>【Micro-edge display】Dive into the game on the 16.1-inch FHD display, featuring 300 nits, micro-edge bezel, anti-glare screen, rapid 165Hz refresh rate, and impressive 7 ms response time.;【Long battery life】Fast charge up to 50% in 30 mins and get back to your squad in no time. Benefit from a 6-cell, 83Wh battery that is perfect for extended gaming sessions.</p></li>
                        <li><p>【Pre-loaded Win 11 and MS Office】Comes with Win 11 and MS Office 2021. To activate your MS Office, sign in or sign up, and follow the Office Activation Wizard.;【Effortless connectivity for uninterrupted gaming sessions】Wi-Fi 6E (2x2) and Bluetooth 5.3, 1 x USB Type-C, 3 x USB Type-A, and 1 x HDMI 2.1 ports equip you with fast and reliable connections.; 【Enhanced collaboration】Team up and tackle challenges even in dim lighting conditions with HP True Vision 1080p FHD camera, temporal noise reduction, 4-zone RGB backlit keyboard, and audio by B&O.;【Sustainably made】Choose an environmentally conscious laptop with recycled plastics, EPEAT Silver registration, and ENERGY STAR certification.</p></li>
                        <li><p>Model: 9q9m9pa</p></li>
                      </>
                    );
        case '27':
                   return (
                      <>
                        <li><p>Processor: Intel Core Ultra 7 Processor 155H (Up to 4.8 GHz 24MB L3 Cache) | Memory: 32 GB LPDDR5X Memory | Storage: 1TB SSD| Intel Arc Graphics</p></li>
                        <li><p>Operating System: Windows 11 Home | Pre-Installed Software: MS Office Home & Student 2021, Galaxy Ecosystem Apps</p></li>
                        <li><p>Display: 14" Inch (35.56cm) Dynamic AMOLED 2X, (2880 x 1800) Resolution | 16:10 Aspect Ratio | 500 Nits Brightness in HDR | Touchscreen</p></li>
                        <li><p>Ports: 2 Thunderbolt4 USB Type-C, 1 USB 3.2 Type-A, 1 HDMI, 1 MicroSD Card Reader | Wi-Fi 6E | Without CD-drive |Battery: 63 Watt Hours, Charger: 65W USB Type-C Adapter</p></li>
                        <li><p>Camera: 2MP with 1080p| Dolby Atmos with AKG Quad Speakers | Microphone: 1 Headphone out/Mic-in Combo | Backlit Keyboard | FingerPrint Reader</p></li>
                      </>
                    );
        case '28':
                   return (
                      <>
                        <li><p>AI Enabled Processor: 1st Generation Intel Core Ultra 7-155H Up To 4.8GHz</p></li>
                        <li><p>Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: MSI Center | In the box: Laptop, Power Adapter</p></li>
                        <li><p>Display: 40cm FHD (1920x1080), 144Hz 45%NTSC IPS-Level.NVIDIA GeForce RTX 4050 | 802.11 ax Wi-Fi 6E + Bluetooth v5.3</p></li>
                        <li><p>Memory & Storage: 8GB DDR5x2 Dual Channel RAM | Storage: 1TB NVMe PCIe Gen4x4 SSD</p></li>
                        <li><p>Powered by latest Intel Core Ultra processor with the latest integrated NPU which is the best choice to accelerate AI programs for long-sustained, power moderate, intensive applications.</p></li>
                      </>
                    );
        case '29':
                   return (
                      <>
                        <li><p>6-core 12th Gen Intel Core i3-1215U? 8 threads and 10MB L3 cache deliver high performance and instant responsiveness. The Intel UHD graphics help you dive into crisp, stunning visuals.;?Upgraded memory and storage? 8GB DDR4 RAM and 512GB SSD help you undertake improved multitasking with ample of storage and higher-bandwidth memory. Now, create, browse, and work as you please.</p></li>
                        <li><p>Micro-edge display? The 15.6-inch, FHD, micro-edge, EPEAT registered, ENERGY STAR certified, 250-nit, and anti-glare display helps you see more of what s on your screen in great quality.;?Effortless connectivity? Wi-Fi 5 (2x2) and Bluetooth 5.0 help you be unstoppable with fast speeds. Experience reliable connectivity with 1 x USB Type-C, 2 x USB Type-A, and 1 x HDMI 1.4b ports.</p></li>
                        <li><p>Long battery life? Fast charging 0% to 50% in 45 mins, up to 7 hours and 45 mins of battery life and up to 10 hours and 45 mins of video playback help you stay productive without frequent charging.</p></li>
                        <li><p>Business conferencing? HP True Vision HD camera helps you put your point across with utmost clarity in high resolution with temporal noise-reduction and dual speakers.; ?Pre-loaded Win 11 and MS Office? Comes with Win 11 and MS Office 2021. To activate your account, sign in/up on Office, follow the Office Activation Wizard</p></li>
                        <li><p>Model: 15s-Fq5007tu/Fq5327tu; Battery Average Life: 10.0 Hours</p></li>
                      </>
                    );
        case '30':
                   return (
                      <>
                        <li><p>Processor: Intel i7-1255U (up to 4.70 GHz, 12MN Cache, 10 Cores) // RAM: 16GB, 2x8GB, DDR4, 3200MHz // Storage: 512GB SSD</p></li>
                        <li><p>Software: Windows 11 Home + Office H&S 2021 + 15 Months McAfee Antivirus</p></li>
                        <li><p>Display: 14.0" FHD+ WVA Truelife Touch Narrow Border 250 nits, Dell Active Pen // Graphics: Integrated // Keyboard: Backlit Keyboard + Fingerprint Reader</p></li>
                        <li><p>Ports: 1 HDMI out 1.4, 1 USB 3.2 Gen 1 Type-A , 2 USB 3.2 Gen 2x2 Type-C with PowerDelivery and Video, 1 3.5mm Headphone/Microphone combination jack, SD Card Reader</p></li>
                      </>
                    );
        case '31':
                   return (
                      <>
                        <li><p>[Expansive Screen] 12.7 Inch, 3K Display (2944 x 1840), 400 nits brightness, 1 Billion Color Depth;[Loud Sound] Quad JBL Speakers, sound by JBL, optimized with Dolby Atmos</p></li>
                        <li><p>[Huge Storage] 8 GB RAM with 128 GB Storage, supports microSD card up to 1 TB;[Processor] Mediatek Dimensity Octa-Core Processor</p></li>
                        <li><p>[Connectivity] Wifi 6, Bluetooth 5.1, USB Type-C, Powered by Android OS 13;[Care for you] Low Blue Light (TÜV Rheinland Certified), TÜV Rheinland Flicker Free</p></li>
                        <li><p>[Ports] 1x USB-C 2.0 (support data transfer and charging) | 1x microSD card slot | 1x Pogo pin connector (3-point); [Warranty] 1 Year Warranty on Tablet</p></li>
                        <li><p>Memory Storage Capacity: 128.0GB; Ram Memory Installed Size: 8.0GB; Warranty Type: Limited</p></li>
                      </>
                    );
        case '32':
                   return (
                      <>
                        <li><p>Snapdragon 870 Octa-Core Processor | Adreno 650 | Qualcomm AI engine | LPDDR5 RAM | UFS 3.1 | Up to 8GB RAM</p></li>
                        <li><p>144Hz 7-Stage Refresh Rate | 27.9cm(11) Display Tablet | 2.8K Resolution | 1 Billion Colors | 2880*1800 High Resolution</p></li>
                        <li><p>Quad Speakers with Dolby Atmos | Long Lasting 8840mAh Battery | Android 13 | MIUI 14 with Android & Security Updates</p></li>
                        <li><p>8MP Front Camera with Focus Frame | 13MP Rear Camera | Metal Unibody Design</p></li>
                      </>
                    );
        case '33':
                   return (
                      <>
                        <li><p>Outstanding vividness with 27.94 cm (11.0”) LCD display, 90 Hz Refresh Rate, 1920 x 1200 (WQXGA)</p></li>
                        <li><p>Qualcomm Snapdragon SM6375 Processor</p></li>
                        <li><p>8 MP AF Rear Camera, 5 MP FF Front camera,Quad Speakers Surround Sound</p></li>
                        <li><p>7040 mAh Battery, Physical SIM (nano)</p></li>
                      </>
                    );
        case '34':
                   return (
                      <>
                        <li><p>[Outstanding Display]: 2.4K 2408x1720 Ultra-High resolution, 11.35-inch/28.85cm Massive Display, 7:5 ReadFit screen ratio & 260 PPI with 400 nits brightness.</p></li>
                        <li><p>[Awesome Audio]: OnePlus omnibearing sound with Dolby Atmos Quad Speakers; [Eye Care]: Low Blue Light (TÜV Rheinland Certified) ; Intelligent brightness ; DC Dimming ; Bedtime Mode</p></li>
                        <li><p>[Seamless connectivity]: Wifi with 4G LTE(Calling) [Processor & Operating system]: MediaTek Helio G99, Android Oxygen OS 13.2</p></li>
                        <li><p>[Storage & Battery]: 8GB RAM with 256GB storage ; 8000 mAh big battery with up-to 514 hours of standby, 33W SUPERVOOC fast charging</p></li>
                        <li><p>Battery Capacity: 8000.0 mAH; Compatible Devices: Headphone; Ram Memory Installed Size: 8.0GB; Model: Opd2304; Memory Storage Capacity: 256.0GB</p></li>
                      </>
                    );
        case '35':
                   return (
                      <>
                        <li><p>[Visionary Display] 10.61 Inch 2K 2000x1200 Resolution IPS Display with 400 nits peak brightness | 90Hz Refresh Rate | 72% NTSC [Sound that Surrounds] Dual speaker optimized with Dolby Atmos</p></li>
                        <li><p>[Storage & Battery] 6 GB RAM with 128 GB Storage, Expandable up-to 1 TB with microSD Card Support; 7700 mAh Battery [Camera] 13 MP Auto-Focus with Flash Rear Camera| 8 MP Fixed Focus Front Camera</p></li>
                        <li><p>[Connectivity] Wifi with LTE (Calling), [Processor] Qualcomm Snapdragon 695 (8C, Kryo 660, 2x Gold @2.2GHz + 6x Silver @1.8GHz) [Care for you] Low Blue Light (TÜV Rheinland Certified)</p></li>
                        <li><p>[Ports] 1x USB-C 2.0 (support data transfer and charging) | 1x Headphone / microphone combo jack (3.5mm) | 1x Nano-SIM + microSD card slot</p></li>
                        <li><p>[Warranty] 1 Year Warranty on Tablet</p></li>
                      </>
                    );
        case '36':
                   return (
                      <>
                        <li><p>Outstanding vividness with 27.94 cm (11.0 ) LCD display, 90 Hz Refresh Rate, 1920 x 1200 (WQXGA)</p></li>
                        <li><p>Qualcomm Snapdragon SM6375 Processor</p></li>
                        <li><p>8 MP AF Rear Camera, 5 MP FF Front camera,Quad Speakers Surround Sound</p></li>
                        <li><p>7040 mAh Battery</p></li>
                        <li><p>Memory Storage Capacity: 128.0GB; Ram Memory Installed Size: 8.0GB; Battery Capacity: 7040.0 mAH; Special Features: Fast Charging</p></li>
                      </>
                    );
        case '37':
                   return (
                      <>
                        <li><p>[Outstanding Display]: 2.4K 2408x1720 Ultra-High resolution, 11.35-inch/28.85cm Massive Display, 7:5 ReadFit screen ratio & 260 PPI with 400 nits brightness.</p></li>
                        <li><p>[Awesome Audio]: OnePlus omnibearing sound with Dolby Atmos Quad Speakers; [Eye Care]: Low Blue Light (TÜV Rheinland Certified) ; Intelligent brightness ; DC Dimming ; Bedtime Mode</p></li>
                        <li><p>[Seamless connectivity]: Wifi with 4G LTE(Calling) [Processor & Operating system]: MediaTek Helio G99, Android Oxygen OS 13.2</p></li>
                        <li><p>[Storage & Battery]: 8GB RAM with 128GB storage ; 8000 mAh big battery with up-to 514 hours of standby, 33W SUPERVOOC fast charging</p></li>
                        <li><p>Ram Memory Installed Size: 8.0GB; Memory Storage Capacity: 128.0GB; Battery Capacity: 8000.0 mAH; Model: Opd2304; Compatible Devices: Headphone</p></li>
                      </>
                    );
        case '38': 
                   return (
                      <>
                        <li><p>【 Storage】 16GB (8+8GB Extended) | 256 GB Storage</p></li>
                        <li><p>【Large Screen & Clear Visuals】 HONOR Pad 9 equipped with a 12.1-inch (30.48-Cm) 120 Hz 2.5k display, 88% screen-to-body ratio, 500 NITS, and 1.07 billion color Gamut screen technology for transparent visuals</p></li>
                        <li><p>【High-Performing processor】 The HONOR Pad 9 comes with a high-performing octa-core Qualcomm Snapdragon 6 Gen 1 (4nm) Mobile Platform processor</p></li>
                        <li><p>【Eye Protection and E-book Mode】 HONOR Pad 9 is certified by TÜV Rheinland for low blue light and flicker-free eye comfort mode and effectively reduces eye fatigue</p></li>
                        <li><p>【Smooth Experience】 The new Magic OS 7.2 system is based on the latest Android 13 provides comprehensive performance</p></li>
                      </>
                    );          
        case '39':
                   return (
                      <>
                        <li><p>[Huge Storage]: 8 GB RAM, 128 GB ROM (microSD support of up to 1 TB) [Awesome Display] : 11 Inch, WUXGA IPS (1920x1200), 400 nits brightness |Refresh Rate: 90Hz | 72% NTSC</p></li>
                        <li><p>[Operating System]: Android 13 (Expect 2 OS Upgrades, Security Patches available until January 2028)</p></li>
                        <li><p>[Processor]: Mediatek Helio Octa-Core Processor. [Battery Capacity]: 7040 mAh</p></li>
                        <li><p>[Loud Audio]: Quad Speakers, optimized with Dolby Atmos</p></li>
                        <li><p>[Front Camera]: 8.0 MP, f/2.0, 78° FoV (field of view) fixed focus with face unlock, Video Recording 1080P@30fps</p></li>
                      </>
                    );
        case '40':
                   return (
                      <>
                        <li><p>2K Display with up to 120Hz screen refresh rate</p></li>
                        <li><p>33W SUPERVOOC Charger in-the-box MediaTek Helio G99 Chipset</p></li>
                        <li><p>realme UI 4.0 for Pad Dolby Atmos Quad Speaker with Hi-Res Certification</p></li>
                        <li><p>Android 13 | Battery: 8360 mAh Lithium Ion</p></li>
                        <li><p>29.21cm (11.5inch) Full HD Display</p></li>
                      </>
                    );
        
      // Add more cases for other product IDs as needed
      default:
        return null;
    }
  };

  if (product) {
    return (
      <div className='d-flex m-2 p-1 justify-content-center'>
        <Card className="shadow" key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} alt={product.title} />
          <Card.Body>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                  required
                />
              </>
            ) : (
              <>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
        <div className='m-2 p-1'>
          <ul style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2>About This Product:</h2>
            {renderDescription()}
          </ul>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default ProductDetail;