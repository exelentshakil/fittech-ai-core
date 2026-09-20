/**
 * Auto-generated Media Assets from Pexels API
 * Project: fittech-ai-core
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "1480530",
    "url": "https://images.pexels.com/photos/1480530/pexels-photo-1480530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A young man resting in a gym while using a mobile phone beside weightlifting equipment.",
    "avg_color": "#574D50"
},
  editorialPhotos: [
    {
    "id": "4162585",
    "url": "https://images.pexels.com/photos/4162585/pexels-photo-4162585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Man in gym standing on stairs, using smartphone while wearing headphones, dressed in sport wear.",
    "avg_color": "#656864"
},
    {
    "id": "39219659",
    "url": "https://images.pexels.com/photos/39219659/pexels-photo-39219659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Man and woman in gym wear reviewing training plan on tablet indoors.",
    "avg_color": "#656764"
},
    {
    "id": "8097823",
    "url": "https://images.pexels.com/photos/8097823/pexels-photo-8097823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Fit woman using VR headset for immersive workout indoors. Embrace fitness tech.",
    "avg_color": "#C3B7AB"
}
  ],
  ambientVideo: {
    "id": "6980609",
    "videoUrl": "https://videos.pexels.com/video-files/6980609/6980609-hd_1080_2048_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/6980609/pexels-photo-6980609.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630",
    "width": 1080,
    "height": 2048
}
};
