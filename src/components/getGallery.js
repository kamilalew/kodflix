import all_about_my_mother from '../images/all_about_my_mother.jpg';
import talk_to_her from '../images/talk_to_her.jpg';
import volver from '../images/volver.jpg';
import julieta from '../images/julieta.jpg';
import pain_and_glory from '../images/pain_and_glory.jpg';
import the_skin_i_live_in from '../images/the_skin_i_live_in.jpg';
import tie_me_up_tie_me_down from '../images/tie_me_up_tie_me_down.jpg';
import verge_of_a_nervous_breakdown from '../images/verge_of_a_nervous_breakdown.jpg';

export default function getGallery(movies) {
    return [
        { id: 'all_about_my_mother', name: 'All About My Mother', image: all_about_my_mother, alt: 'All About My Mother Movie Cover', synopsis: 'Dupa dupa dupa dupa' },
        { id: 'talk_to_her', name: 'Talk To Her', image: talk_to_her, alt: 'Talk To Her Movie Cover' },
        { id: 'volver', name: 'Volver', image: volver, alt: 'Volver Movie Cover' },
        { id: 'pain_and_glory', name: 'Pain and Glory', image: pain_and_glory, alt: 'Pain and Glory Movie Cover' },
        { id: 'julieta', name: 'Julieta', image: julieta, alt: 'Julieta Movie Cover' },
        { id: 'tie_me_up_tie_me_down ', name: 'Tie Me Up Tie Me Down', image: tie_me_up_tie_me_down , alt: 'Tie Me Up Tie Me Down Movie Cover' },
        { id: 'verge_of_a_nervous_breakdown', name: 'Verge Of a Nervous Breakdown', image: verge_of_a_nervous_breakdown, alt: 'Verge Of a Nervous Breakdown Movie Cover' },
        { id: 'the_skin_i_live_in', name: 'The Skin I Live In', image: the_skin_i_live_in, alt: 'The Skin I Live In Movie Cover' }
    ]
}