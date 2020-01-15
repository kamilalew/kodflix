import all_about_my_mother from '../images/all_about_my_mother.jpg';
import frida from '../images/frida.jpg';
import grown_ups from '../images/grown_ups.jpeg';
import perfect_strangers from '../images/perfect_strangers.jpeg';
import twice_born from '../images/twice_born.jpeg';
import zohan from '../images/zohan.jpeg';

export default function getGallery(movies) {
    return [
        { id: 'twice_born', name: 'Twice Born', image: twice_born, alt: 'Twice Born Movie Cover' },
        { id: 'perfect_strangers', name: 'Perfect Strangers', image: perfect_strangers, alt: 'Perfect Strangers Movie Cover' },
        { id: 'frida', name: 'Frida', image: frida, alt: 'Frida Movie Cover' },
        { id: 'all_about_my_mother', name: 'All About My Mother', image: all_about_my_mother, alt: 'All About My Mother Movie Cover' },
        { id: 'grown_ups', name: 'Grown Ups', image: grown_ups, alt: 'Grown Ups Movie Cover' },
        { id: 'zohan', name: 'Zohan', image: zohan, alt: 'Zohan Movie Cover' }
    ]
}