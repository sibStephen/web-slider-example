import React from 'react';

import personaSlider from './persona-slider.twig';

import personaSlider from './persona-slider.yml';

export default { title: 'Persona Slider' };

export const PersistentContactBar = () => (
  <div
    dangerouslySetInnerHTML={{ __html: persistentContactBar(personaslider) }}
  />
);
