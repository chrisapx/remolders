import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import SlotRequestForm from '../components/forms/SlotRequestForm';

const Milestones = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);

  return (
    <div className="relative h-screen overflow-auto">
      <GlobalHeader />

      <div className='text-center border-b'>
        <button 
          onClick={() => setToggleMusicForm(true)}
          title={'Submit your music to us and we shall settle a quick call for review'}
          className='my-8 text-white px-16 py-3 bg-black bg-opacity-80 rounded-[5px] transparent font-[600] text-md hover:bg-opacity-90 text-center'
        >
          Enroll
        </button>
      </div>

      <section className="border-b my-3">
        <h1 className="text-center text-3xl font-bold flex justify-center gap-4 items-center pt-4">Our Milestones <a href='/files/reMolders - Milestones.pdf' download className='text-sm cursor-pointer text-blue-500'><i className='pi pi-download text-sm'/> pdf</a></h1>
        <div className="py-6 grid px-5 md:px-[10vw] gap-16 flex-wrap">
          <div className="">
            <h2 className="text-xl font-semibold py-4">Milestone 1: Industry-Academia Meetup</h2>
            <p>
            Level 1 culminates in a dynamic <strong>academia-industry meetup</strong>, 
            not just a pitching competition. This marks the students' chance to showcase 
            their meticulously crafted business ideas to a distinguished panel of multi-sector 
            innovators. These esteemed guests become active participants, fostering an open exchange of ideas. 
            They'll provide insightful feedback based on viability, feasibility, and the potential 
            value the ideas bring to customers.
            </p>
            <br />
            <p>
            But the engagement transcends mere evaluation. This event fosters a mentorship ecosystem. 
            Each industry personality can choose to become a champion for the most promising ideas, 
            providing invaluable guidance, potential monetary support, or even seed investment. 
            They can also leverage their professional networks, connecting students with industry 
            leaders who can propel these ventures forward. This unique model ensures a rigorous 
            evaluation process with real-world applicability. Seasoned professionals will scrutinize each 
            business idea, ensuring it holds water in the face of market demands. Ultimately, this meetup 
            paves the way for the students to not only refine their ideas but also secure the resources 
            needed to turn them into successful, impactful businesses
            </p>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold py-4">Milestone 2: reMolders Podium</h2>
            <p>
            For the past 13 weeks, our graduating class by this point has been on a transformative journey. 
            They've cooked up innovative ideas – both for business ventures and social impact initiatives. 
            But it's not just about the ideas themselves. 
            They've also delved into the power of these ideas to reshape the world around them.
            </p>
            <br />
            <p>
            Now, it's time to ignite a spark! reMolders podium becomes the melting pot where these ideas meet 
            a wider audience. This is about creating synergies.
            </p>
            <br />
            <p>
            reMolders podium isn't just a platform; it's a potential Overton window shifter. 
            Imagine ideas so cutting-edge, so rooted in bleeding-edge research, 
            that they redefine our understanding of social change and entrepreneurship. 
            A select few graduating members will step forward, sharing these thought-provoking 
            concepts with an audience that can propel them into reality.
            </p>
            <br />
            <p>
            The onus doesn't stop there. 
            These young minds will actively network with potential supporters who can turn their ideas into action.
            </p>
            <br />
            <p>
            Beyond student presentations, let's fuel aspirational thinking even further. 
            A panel discussion featuring a team of experts, tackling a thematic topic on the industry's 
            bleeding edge, will ignite discourse. This is aspirational thinking in action, 
            shaping the career dreams of the students present.
            </p>
            <br />
            <p>
            reMolders podium will evolve with the times, adapting to contemporary needs. 
            But its core purpose remains constant: to foster transformative dialogue and aspirational 
            thinking. It's an event that leaves a lasting impact, simply by being a part of it.
            </p>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 w-full">
        <Signing />
      </div>

      <SlotRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Milestones;
