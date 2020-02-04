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
        {
            id: 'all_about_my_mother', name: 'All About My Mother', image: 'all_about_my_mother', alt: 'All About My Mother Movie Cover', synopsis:
                `A Greek saying states that only women who have washed their eyes with tears can see clearly. This saying does not hold true for Manuela. 
        The night a car ran over her son Esteban, Manuela cried until her eyes ran completely dry. Far from seeing clearly, the present and the future become mixed up in darkness. 
        She begins looking for his father who has become a transvestite.` },
        {
            id: 'talk_to_her', name: 'Talk To Her', image: talk_to_her, alt: 'Talk To Her Movie Cover', synopsis:
                `Male nurse Benigno becomes infatuated with a complete stranger when he watches dancer Alicia practicing from the anonymity of his apartment. 
        After being injured in a car accident, Alicia is brought to a nearby hospital, where Benigno serendipitously happens to be her caregiver. 
        When wounded bullfighter Lydia is brought into the same ward, her companion, writer Marco begins to bond with Benigno.` },
        {
            id: 'volver', name: 'Volver', image: volver, alt: 'Volver Movie Cover', synopsis: `Raimunda works and lives Madrid with her husband Paco and daughter Paula. 
        Her sister Sole lives nearby and they both miss their mother Irene, who died several years ago in a house fire along with their father. 
        A former neighbor from their hometown reports that she has seen the ghost of Irene and both daughters do not believe her. 
        After a murder and a family tragedy, Irene's spirit materializes around her daughters to help comfort them.` },
        {
            id: 'pain_and_glory', name: 'Pain and Glory', image: pain_and_glory, alt: 'Pain and Glory Movie Cover', synopsis:
                `A film director reflects on the choices he's made in life as the past and present come crashing down around him.`
        },
        {
            id: 'julieta', name: 'Julieta', image: julieta, alt: 'Julieta Movie Cover', synopsis: `After a chance meeting, middle-aged Julieta learns that 
        her long-lost daughter has resurfaced in Madrid. This begins a painful reflection by Julieta into her checkered past, flashing back to the moments 
        of pain that defined her current life.` },
        {
            id: 'tie_me_up_tie_me_down ', name: 'Tie Me Up Tie Me Down', image: tie_me_up_tie_me_down, alt: 'Tie Me Up Tie Me Down Movie Cover', synopsis:
                `Newly released from a mental institution, Ricky heads straight for a reunion with the love of his life, B-movie actress Marina. The trouble is, 
        Marina doesn't remember him -- or the fling they had during her years as a junkie and porn star. Determined to make Marina love him, Ricky barges 
        into her apartment and ties her up. With a captive audience, Ricky is sure it's only a matter of time before his beloved returns his affections.` },
        {
            id: 'verge_of_a_nervous_breakdown', name: 'Verge Of a Nervous Breakdown', image: verge_of_a_nervous_breakdown, alt: 'Verge Of a Nervous Breakdown Movie Cover', synopsis:
                `When Pepa Marcos' lover Ivan suddenly leaves her without any explanation, she embarks on a strange journey to discover why. On the way she meets a variety of eccentric characters, 
        including Ivan's son from a previous relationship, his fiancee Marissa and a Shiite terrorist cell who have been secretly holding her best friend Candela hostage. It's a film noir 
        take on the romantic comedy.` },
        {
            id: 'the_skin_i_live_in', name: 'The Skin I Live In', image: the_skin_i_live_in, alt: 'The Skin I Live In Movie Cover', synopsis: `Ever since 
        his beloved wife was horribly burned in an auto accident, Dr. Robert Ledgard, a skilled plastic surgeon, has tried to develop a new skin that could 
        save the lives of burn victims. Finally, after 12 years, Ledgard has created a skin that guards the body, but is still sensitive to touch. With the 
        aid of his faithful housekeeper, Ledgard tests his creation on Vera, who is held prisoner against her will in the doctor's mansion.` }
    ]
}