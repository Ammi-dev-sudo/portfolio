const facebookUrl = import.meta.env.VITE_FACEBOOK_URL?.trim() || 'https://www.facebook.com/'

const whatsappNumber = '261346914064'
const whatsappMessage = 'Bonjour Ammi Joda, je vous contacte depuis votre portfolio.'

export const CONTACT = {
  name: 'ANDRIAMANANA Ammi Joda',
  firstName: 'Ammi',
  email: 'ammijoda5@gmail.com',
  emailUrl: 'mailto:ammijoda5@gmail.com',
  phoneDisplay: '0346914064',
  phoneInternational: '+261 34 69 140 64',
  phoneUrl: 'tel:+261346914064',
  whatsappNumber,
  whatsappDisplay: '+261 34 69 140 64',
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  facebookName: 'Ammi',
  facebookUrl,
}

export default CONTACT
