import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import SlotRequestForm from '../components/forms/SlotRequestForm';

const Curriculum = () => {
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
        <h1 className="text-center text-3xl font-bold flex justify-center gap-4 items-center pt-4">Our modules structure<a href='/files/reMolders -  Modules.pdf' download className='text-sm cursor-pointer text-blue-500'><i className='pi pi-download text-sm'/> pdf</a></h1>
        <div className="px-5 md:px-[10vw] py-16">
          <p>
            <strong>Level 1 - Coming up with a good business idea:</strong> It entails transforming students into 
            resourceful problem-solvers capable of extracting sustainably lucrative ideas 
            from their thrills and frustrations so as to tackle real-world issues within their communities & beyond.
          </p>
          <br />
          <p>
            Module (i) Self Awareness: This module empowers learners with self-discovery by 
            equipping them with knowledge about their personalities and values. 
            By identifying their strengths and weaknesses, they’ll gain valuable insights that 
            contribute to self-regulation. This newfound understanding will then guide them in making 
            crucial life decisions, such as choosing a career path or setting long-term goals.
          </p>
          <br />
          <p>
            Module (ii) Opportunity Evaluation: Aims to equip learners to navigate the exciting, 
            yet challenging, process of selecting the "right" opportunity. Through this journey, 
            they will develop the skills to evaluate and prioritize options, within a vast 
            sea of possibilities, that not only sparks their passion but also leverages their 
            existing skills and talents to address a genuine global need.
          </p>
          <br />
          <p>
            Module (iii) Deconstructive Problem Solving: Designed to empower learners with the skills to dissect complex problems. By breaking them down into their constituent parts, learners will be able to identify the underlying assumptions and true root causes of the challenges they seek to solve. 
          </p>
          <br />
          <p>
            Module (iv) User Empathy: This module equips learners to delve into the world of their target customers or beneficiaries. By examining their thrills & frustrations, learners will gain a deeper understanding of the unique contextual factors that shape their experiences, which will fuel innovation, leading to the development of products that directly address the immediate problems faced by the target group.
          </p>
          <br />
          <p>
            Module (v) Ideation and Idea Viability: Empowers learners to come up with solutions to complex problems. It delves into the art of selecting the most ideal solution from a pool of viable alternatives. Learners will develop the skills to assess the feasibility of potential solutions, considering factors like available resources, skill sets, existing networks, and even long-term sustainability plans.
          </p>
          <br />
          <p>
            Module (vi) Prototyping: Equips learners to create functional prototypes that address customer challenges. By prioritizing value risks, learners craft solutions that are both user-valuable and viable. These prototypes then test the core assumptions underlying the solution, preparing learners for the real world where testing assumptions is crucial before launching full products or tackling community challenges. 
          </p>
          <br />
          <p>
            Module (vii) Pitching: This lesson equips learners with the skills to share their solutions to societal problems in an engaging and captivating way to garner intellectual or material support to support the design, implementation, evaluation, or scale and have a wider impact.  
          </p>

          <br />
          <br />
          <p>
            <strong>Level 2 - Creating a culture reshaping strategy:</strong> Envisaging learners as builders and steerers of culture.
          </p>
          <br />
          <p>
            Module (i) Iterative Design: This lesson seeks to determine how to create tests, evaluate them, and then draw insights from them that would guide one on whether to proceed as is, tweak, or pivot. 
          </p>
          <br />
          <p>
            Module (ii) Other Awareness: Inspires a lifestyle built on empathy. By seeing things from others' perspectives and tailoring your approach to their needs, you can develop a comprehensive understanding of those around you. This helps you stay true to your vision while navigating negativity and external influences. As a result, your interactions and communication will be more impactful, motivating others to take action regardless of their background or characteristics. 
          </p>
          <br />
          <p>
            Module (iii) Immediate Cultural Context: This lesson aims to equip learners to identify internal and external factors that can influence their personal, career, and business success. Through this self-assessment, they will develop strategies to overcome challenges and achieve their goals, regardless of obstacles. This analysis will be conducted in the context of the ideas generated in Level 1.
          </p>
          <br />
          <p>
            Module (iv) Cultural Mapping: Learners will assess the utility of the culture around them. They will determine those cultures that are advantageous to the advancement of positive outcomes from those that are disadvantageous and also explore ways to de-promote the detrimental ones.
          </p>
          <br />
          <p>
            Module (v) Art as a source of inspiration: Explores ways to use the immediate environment around us to promote and obtain inspiration. This module seeks to explore ways various platforms and tools can be used to share, market, and promote our vision to a bigger audience in a cost-friendly way. At the same time, we shall explore how to use the same tools and/or platforms to obtain inspiration.
          </p>
          <br />
          <p>
            Module (vi) Cultural Forecasting: Seeks to introduce learners to the practice of setting goals around culture and how to influence it. The goal is for learners to leverage their social or business initiatives to reshape the culture in the industry. A case in point is Stanford University which has transformed the culture of Silicon Valley into the global startup and innovation hub. Can they transform their industries/communities into those that embrace excellence?
          </p>
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

export default Curriculum;