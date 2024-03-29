// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "home" }],
  //cardano: [{type: 'autogenerated', dirName: 'cardano'}],  
  //algorand: [{type: 'autogenerated', dirName: 'algorand'}],  
  cardano: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'home/intro-c1',
    },
    {
      type: 'category',
      label: 'Learn Concepts',
      items: [
        {
          type: 'autogenerated',
          dirName: 'home/learn'
        },
    
      ]
    },
    {
      type: 'autogenerated',
      dirName: 'cardano'
    },
    {
      type: 'doc',
      label: 'Get Help',
      id: 'home/get-help',
    }
  ],
  algorand: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'home/intro',
    },
    {
      type: 'category',
      label: 'Learn Concepts',
      items: [
        {
          type: 'autogenerated',
          dirName: 'home/learn'
        },    
      ]
    },
    {
      type: 'autogenerated',
      dirName: 'algorand'
    },
    {
      type: 'doc',
      label: 'Get Help',
      id: 'home/get-help',
    },
  ]
};

module.exports = sidebars;
