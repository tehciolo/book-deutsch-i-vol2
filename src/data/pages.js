module.exports = function() {
  return {
    '04': {
      toc: [
        {
          route: '04-05',
          trigger: {
              top: '18%',
              bottom: '77%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '14-15',
          trigger: {
              top: '24%',
              bottom: '72%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '24-25',
          trigger: {
              top: '29%',
              bottom: '66%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '34-35',
          trigger: {
              top: '35%',
              bottom: '60%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '44-45',
          trigger: {
              top: '41%',
              bottom: '54%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '46-47',
          trigger: {
              top: '47%',
              bottom: '48%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '46-47',
          trigger: {
              top: '53%',
              bottom: '42%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '48-49',
          trigger: {
              top: '59%',
              bottom: '36%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '52-53',
          trigger: {
              top: '65%',
              bottom: '30%',
              left: '8%',
              width: '64%'
          }
        }
      ]
    },
    '05': {
      video: [
        {
          video: {
            source: 'p5_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '06': {
      video: [
        {
          video: {
            source: 'p6_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '41%'
            }
          }
        },
        {
          video: {
            source: 'p6_v2'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '07': {
      static: [
        {
          image: 'pg7ex5static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '2%',
              width: '55%'
            }
          }
        },
        {
          image: 'pg7ex5static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '74%'
            },
            zone: {
              top: '58%',
              bottom: '2%',
              left: '59%',
              width: '33%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p7_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '42%'
            }
          }
        }
      ]
    },
    '08': {
      video: [
        {
          video: {
            source: 'p8_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '58%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'type',
          title: 'ZÄHL UND SCHREIB DIE ZAHL!',
          image: 'pg08ex7',
          trigger: {
            button: {
              top: '43%'
            },
            zone: {
              top: '43%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'NUMARA CATE ANIMALE SUNT IN FIECARE GRUPA SI SCRIE NUMARUL. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '47%',
                left: '43.7%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '9'
            },
            {
              identifier: 'two',
              position: {
                top: '47%',
                left: '76.9%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '7'
            },
            {
              identifier: 'three',
              position: {
                top: '67.5%',
                left: '43.6%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '10'
            },
            {
              identifier: 'four',
              position: {
                top: '67.5%',
                left: '76.9%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '8'
            }
          ]
        }
      ]
    },
    '09': {
      video: [
        {
          video: {
            source: 'p9_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '44%'
            }
          }
        },
        {
          video: {
            source: 'p9_v2'
          },
          trigger: {
            button: {
              top: '56%'
            },
            zone: {
              top: '56%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '10': {
      static: [
        {
          image: 'pg10ichmag',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '3%',
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p10_v1'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '31%'
            }
          }
        }
      ]
    },
    '11': {
      exercise: [
        {
          type: 'picker',
          title: 'MAL AUS UND KREIS DEN NAMEN EIN!',
          image: 'pg11ex1',
          trigger: {
            button: {
              top: '19%'
            },
            zone: {
              top: '19%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'ALEGE DENUMIREA POTRIVITA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '32.3%',
                left: '35.5%',
                width: '60%',
                height: '4.5%'
              },
              answer: {
                left: '57.5%',
                width: '15%'
              },
              validation: {
                shown: false,
                pre: 'pg11ex1dovepre',
                post: 'pg11ex1dovepost',
                position: {
                  top: '20%',
                  left: '62%',
                  width: '12%'
                }
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '57%',
                left: '-12%',
                width: '60%',
                height: '4.5%'
              },
              answer: {
                left: '70.5%',
                width: '27%'
              },
              validation: {
                shown: false,
                pre: 'pg11ex1turtlepre',
                post: 'pg11ex1turtlepost',
                position: {
                  top: '44%',
                  left: '24%',
                  width: '18%'
                }
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '57%',
                left: '54%',
                width: '60%',
                height: '4.5%'
              },
              answer: {
                left: '1.5%',
                width: '15%'
              },
              validation: {
                shown: false,
                pre: 'pg11ex1mousepre',
                post: 'pg11ex1mousepost',
                position: {
                  top: '43.5%',
                  left: '60%',
                  width: '16%'
                }
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '81.5%',
                left: '-12%',
                width: '60%',
                height: '4.5%'
              },
              answer: {
                left: '77.5%',
                width: '15%'
              },
              validation: {
                shown: false,
                pre: 'pg11ex1dogpre',
                post: 'pg11ex1dogpost',
                position: {
                  top: '67%',
                  left: '28%',
                  width: '10%'
                }
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '81.5%',
                left: '54%',
                width: '60%',
                height: '4.5%'
              },
              answer: {
                left: '1.5%',
                width: '15%'
              },
              validation: {
                shown: false,
                pre: 'pg11ex1fishpre',
                post: 'pg11ex1fishpost',
                position: {
                  top: '70%',
                  left: '60%',
                  width: '15%'
                }
              }
            }
          ]
        }
      ]
    },
    '12': {
      exercise: [
        {
          type: 'type',
          title: 'ZÄHL DIE TIERE UND SCHREIB DIE ZAHL!',
          image: 'pg12ex2',
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'NUMARA ANIMALELE DIN IMAGINE SI SCRIE NUMARUL IN CASUTA CORESPUNZATOARE. Cand ai terminat apasa pe cheita si verifica.'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '76.8%',
                left: '19%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '8',
              validation: {
                shown: false,
                pre: 'pg12ex2mousepre',
                post: 'pg12ex2mousepost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            },
            {
              identifier: 'two',
              position: {
                top: '76.8%',
                left: '37.4%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '2',
              validation: {
                shown: false,
                pre: 'pg12ex2catpre',
                post: 'pg12ex2catpost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            },
            {
              identifier: 'three',
              position: {
                top: '76.8%',
                left: '55%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '9',
              validation: {
                shown: false,
                pre: 'pg12ex2fishpre',
                post: 'pg12ex2fishpost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            },
            {
              identifier: 'four',
              position: {
                top: '76.8%',
                left: '78.8%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '1',
              validation: {
                shown: false,
                pre: 'pg12ex2rabbitpre',
                post: 'pg12ex2rabbitpost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            },
            {
              identifier: 'five',
              position: {
                top: '83.7%',
                left: '30.2%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '7',
              validation: {
                shown: false,
                pre: 'pg12ex2turtlepre',
                post: 'pg12ex2turtlepost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            },
            {
              identifier: 'six',
              position: {
                top: '83.7%',
                left: '48.7%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '4',
              validation: {
                shown: false,
                pre: 'pg12ex2dogpre',
                post: 'pg12ex2dogpost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            },
            {
              identifier: 'seven',
              position: {
                top: '83.7%',
                left: '67.8%',
                width: '5.6%',
                height: '4.5%'
              },
              model: '',
              solution: '10',
              validation: {
                shown: false,
                pre: 'pg12ex2birdpre',
                post: 'pg12ex2birdpost',
                position: {
                  top: '12%',
                  left: '9%',
                  width: '81%'
                }
              }
            }
          ]
        }
      ]
    },
    '13': {
      static: [
        {
          image: 'pg13static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '24%'
            },
            zone: {
              top: '24%',
              bottom: '50%',
            }
          }
        },
        {
          image: 'pg13static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '22%',
            }
          }
        },
        {
          image: 'pg13static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '78%'
            },
            zone: {
              top: '78%',
              bottom: '5%',
            }
          }
        }
      ]
    },
    '14': {
      static: [
        {
          image: 'pg14static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '69%',
            }
          }
        },
        {
          image: 'pg14static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '39%'
            },
            zone: {
              top: '39%',
              bottom: '27%',
            }
          }
        },
        {
          image: 'pg14static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '3%',
            }
          }
        }
      ]
    },
    '15': {
      video: [
        {
          video: {
            source: 'p15_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '1%'
            }
          }
        }
      ]
    },
    '16': {
      video: [
        {
          video: {
            source: 'p16_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '17': {
      static: [
        {
          image: 'pg17zeichne',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '4%',
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p17_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '41%'
            }
          }
        }
      ]
    },
    '18': {
      video: [
        {
          video: {
            source: 'p18_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '19': {
      static: [
        {
          image: 'pg19zeichne',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '6%',
            }
          }
        }
      ]
    },
    '20': {
      video: [
        {
          video: {
            source: 'p20_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '16%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'painter',
          title: 'MAL AUS!',
          image: 'pg20ex6',
          trigger: {
            button: {
              top: '84%'
            },
            zone: {
              top: '84%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'COLOREAZA COLACUL FOLOSIND CULOARILE INDICATE. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '35%',
                left: '47.65%',
                width: '30%',
                height: '13.5%'
              },
              colors: [
                'ff0000',
                '00ff00',
                'ee82ef',
                'ffff00',
                '0000ff',
                'fea500',
                'ffffff',
                '000000',
                'ffc0cb',
                'a62a2a'
              ],
              easel: {
                top: '-30%',
                width: '100%',
                height: '20%'
              },
              solution: 'pg20ex6solution'
            }
          ]
        }
      ]
    },
    '21': {
     exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'VERBINDE!',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'UNESTE CUVANTUL CU IMAGINEA CORESPUNZATOARE. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'vati',
              style: {
                top: '7%',
                left: '12%',
                width: '15%',
                height: 'auto',
                color: '#8bcb6a'
              },
              image: {
                 src: '21-vati.png'
               },
               sourceAnchors: ["BottomCenter"],
               targetAnchors: []
            },
            {
              identifier: 'oma',
              style: {
                top: '7%',
                left: '32%',
                width: '15%',
                height: 'auto',
                color: '#8bcb6a'
              },
              image: {
                 src: '21-oma.png'
               },
               sourceAnchors: ["BottomCenter"],
               targetAnchors: []
            },
            {
              identifier: 'mutti',
              style: {
                top: '7%',
                left: '52%',
                width: '15%',
                height: 'auto',
                color: '#8bcb6a'
              },
              image: {
                 src: '21-mutti.png'
               },
               sourceAnchors: ["BottomCenter"],
               targetAnchors: []
            },
            {
              identifier: 'opa',
              style: {
                top: '7%',
                left: '72%',
                width: '15%',
                height: 'auto',
                color: '#8bcb6a'
              },
              image: {
                 src: '21-opa.png'
               },
               sourceAnchors: ["BottomCenter"],
               targetAnchors: []
            },
            {
               identifier: 'mutti-text',
               style: {
                 top: '33%',
                 left: '12%',
                 width: '15%',
                 height: 'auto'
               },
               image: {
                 src: '21-mutti-text.png'
               },
               solution: 'mutti',
               solutionImg: {
                 src: '21-mutti-text.png'
               },
               sourceAnchors: [],
               targetAnchors: ["TopCenter"]
             },
             {
                identifier: 'vati-text',
                style: {
                  top: '33%',
                  left: '32%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '21-vati-text.png'
                },
                solution: 'vati',
                solutionImg: {
                  src: '21-vati-text.png'
                },
                sourceAnchors: [],
                targetAnchors: ["TopCenter"]
              },
              {
                 identifier: 'oma-text',
                 style: {
                   top: '33%',
                   left: '52%',
                   width: '15%',
                   height: 'auto'
                 },
                 image: {
                   src: '21-oma-text.png'
                 },
                 solution: 'oma',
                 solutionImg: {
                   src: '21-oma-text.png'
                 },
                 sourceAnchors: [],
                 targetAnchors: ["TopCenter"]
               },
               {
                  identifier: 'opa-text',
                  style: {
                    top: '33%',
                    left: '72%',
                    width: '15%',
                    height: 'auto'
                  },
                  image: {
                    src: '21-opa-text.png'
                  },
                  solution: 'opa',
                  solutionImg: {
                    src: '21-opa-text.png'
                  },
                  sourceAnchors: [],
                  targetAnchors: ["TopCenter"]
                },
                {
                  identifier: 'bruder',
                  style: {
                    top: '51%',
                    left: '25%',
                    width: '15%',
                    height: 'auto',
                    color: '#8bcb6a'
                  },
                  image: {
                     src: '21-bruder.png'
                   },
                   sourceAnchors: ["BottomCenter"],
                   targetAnchors: []
                },
                {
                  identifier: 'schwester',
                  style: {
                    top: '50%',
                    left: '60%',
                    width: '14%',
                    height: 'auto',
                    color: '#8bcb6a'
                  },
                  image: {
                     src: '21-schwester.png'
                   },
                   sourceAnchors: ["BottomCenter"],
                   targetAnchors: []
                },
                {
                   identifier: 'schwester-text',
                   style: {
                     top: '80%',
                     left: '25%',
                     width: '18%',
                     height: 'auto'
                   },
                   image: {
                     src: '21-schwester-text.png'
                   },
                   solution: 'schwester',
                   solutionImg: {
                     src: '21-schwester-text.png'
                   },
                   sourceAnchors: [],
                   targetAnchors: ["TopCenter"]
                 },
                 {
                    identifier: 'bruder-text',
                    style: {
                      top: '80%',
                      left: '60%',
                      width: '15%',
                      height: 'auto'
                    },
                    image: {
                      src: '21-bruder-text.png'
                    },
                    solution: 'bruder',
                    solutionImg: {
                      src: '21-bruder-text.png'
                    },
                    sourceAnchors: [],
                    targetAnchors: ["TopCenter"]
                  }
          ]
        }
      ]
    },
    '22': {
      static: [
        {
          image: 'pg22ex2static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '22%'
            },
            zone: {
              top: '22%',
              bottom: '55%',
              left: '20%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg22ex2static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '32%'
            },
            zone: {
              top: '22%',
              bottom: '55%',
              left: '56%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg22ex2static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '45%'
            },
            zone: {
              top: '45%',
              bottom: '31%',
              left: '20%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg22ex2static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '55%'
            },
            zone: {
              top: '45%',
              bottom: '31%',
              left: '56%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg22ex2static5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '7%',
              left: '20%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg22ex2static6',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '79%'
            },
            zone: {
              top: '69%',
              bottom: '7%',
              left: '56%',
              width: '36%'
            }
          }
        }
      ]
    },
    '23': {
      static: [
        {
          image: 'pg23static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '19%'
            },
            zone: {
              top: '19%',
              bottom: '61%'
            }
          }
        },
        {
          image: 'pg23static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '39%'
            },
            zone: {
              top: '39%',
              bottom: '39%'
            }
          }
        },
        {
          image: 'pg23static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '68%'
            },
            zone: {
              top: '68%',
              bottom: '10%'
            }
          }
        }
      ]
    },
    '24': {
      static: [
        {
          image: 'pg24static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '4%'
            },
            zone: {
              top: '4%',
              bottom: '62%'
            }
          }
        },
        {
          image: 'pg24static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '38%'
            },
            zone: {
              top: '38%',
              bottom: '32%'
            }
          }
        },
        {
          image: 'pg24static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '68%'
            },
            zone: {
              top: '68%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '25': {
      video: [
        {
          video: {
            source: 'p25_v1'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '1%'
            }
          }
        }
      ]
    },
    '26': {
      video: [
        {
          video: {
            source: 'p26_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '27': {
      static: [
        {
          image: 'pg27ex3static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '48%'
            }
          }
        },
        {
          image: 'pg27ex3static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '28': {
      video: [
        {
          video: {
            source: 'p28_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '29': {
      static: [
        {
          image: 'pg29ex6static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '28%',
              left: '18%',
              width: '35%'
            }
          }
        },
        {
          image: 'pg29ex6static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '50%',
              bottom: '28%',
              left: '56%',
              width: '35%'
            }
          }
        },
        {
          image: 'pg29ex6static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '4%',
              left: '18%',
              width: '35%'
            }
          }
        },
        {
          image: 'pg29ex6static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '83%'
            },
            zone: {
              top: '73%',
              bottom: '4%',
              left: '56%',
              width: '35%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p29_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '56%'
            }
          }
        }
      ]
    },
    '30': {
      static: [
        {
          image: 'pg30ex7',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '31%'
            }
          }
        },
        {
          image: 'pg30ichbin',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '31': {
      video: [
        {
          video: {
            source: 'p31_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '32': {
      video: [
        {
          video: {
            source: 'p32_v1'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '4%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'typer',
          title: 'ERGÄNZE!',
          image: 'pg32ex2',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '33%'
            }
          },
          help: {
            toggle: false,
            text: 'PRIVESTE CU ATENTIE IMAGINILE SI SCRIE CUVANTUL POTRIVIT. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '34%',
                left: '16%',
                width: '13%'
              },
              model: '',
              solution: 'FROH'
            },
            {
              identifier: 'two',
              position: {
                top: '26%',
                left: '47%',
                width: '13%'
              },
              model: '',
              solution: 'ZORNIG'
            },
            {
              identifier: 'three',
              position: {
                top: '32.5%',
                left: '72%',
                width: '13%'
              },
              model: '',
              solution: 'TRAURIG'
            },
            {
              identifier: 'four',
              position: {
                top: '57.8%',
                left: '35%',
                width: '13%'
              },
              model: '',
              solution: 'TRAURIG'
            },
            {
              identifier: 'five',
              position: {
                top: '58%',
                left: '67%',
                width: '13%'
              },
              model: '',
              solution: 'FROH'
            }
          ]
        }
      ]
    },
    '33': {
      static: [
        {
          image: 'pg33static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '23%'
            },
            zone: {
              top: '23%',
              bottom: '56%'
            }
          }
        },
        {
          image: 'pg33static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '44%'
            },
            zone: {
              top: '44%',
              bottom: '34%'
            }
          }
        },
        {
          image: 'pg33static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '20%'
            }
          }
        },
        {
          image: 'pg33static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '80%'
            },
            zone: {
              top: '80%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '34': {
      static: [
        {
          image: 'pg34static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '52%'
            }
          }
        },
        {
          image: 'pg34static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '48%'
            },
            zone: {
              top: '48%',
              bottom: '25%'
            }
          }
        }
      ]
    },
    '35': {
      video: [
        {
          video: {
            source: 'p35_v1'
          },
          trigger: {
            button: {
              top: '16%'
            },
            zone: {
              top: '16%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '36': {
      exercise: [
        {
          type: 'typer',
          title: 'FINDE, KREIS EIN UND SCHREIB DIE WÖRTER! FINDE DIE GEHEIME NACHRICHT!',
          image: 'pg36ex2',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '6%'
            }
          },
          help: {
            toggle: false,
            text: 'CAUTA IN CAREU CUVINTELE CORESPUNZATOARE IMAGINILOR SI COMPLETEAZA-LE IN DREPTUL IMAGINILOR. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '14.5%',
                left: '38%',
                width: '8%'
              },
              model: '',
              solution: 'ICH'
            },
            {
              identifier: 'two',
              position: {
                top: '14.5%',
                left: '47%',
                width: '9%'
              },
              model: '',
              solution: 'MAG'
            },
            {
              identifier: 'three',
              position: {
                top: '17.7%',
                left: '33%',
                width: '16%'
              },
              model: '',
              solution: 'PIZZA'
            },
            {
              identifier: 'four',
              position: {
                top: '17.7%',
                left: '48%',
                width: '12%'
              },
              model: '',
              solution: 'SEHR'
            },
            {
              identifier: 'five',
              position: {
                top: '77.5%',
                left: '66%',
                width: '25%'
              },
              model: '',
              solution: 'TÜR'
            },
            {
              identifier: 'six',
              position: {
                top: '65.7%',
                left: '67%',
                width: '25%'
              },
              model: '',
              solution: 'PAPIERKORB'
            },
            {
              identifier: 'seven',
              position: {
                top: '53.7%',
                left: '67%',
                width: '25%'
              },
              model: '',
              solution: 'SCHRANK'
            },
            {
              identifier: 'eight',
              position: {
                top: '65.7%',
                left: '26%',
                width: '25%'
              },
              model: '',
              solution: 'STUHL'
            },
            {
              identifier: 'nine',
              position: {
                top: '77.2%',
                left: '26%',
                width: '25%'
              },
              model: '',
              solution: 'TAFEL'
            }
          ]
        }
      ]
    },
    '37': {
      video: [
        {
          video: {
            source: 'p37_v1'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '38': {
      video: [
        {
          video: {
            source: 'p38_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '39': {
      video: [
        {
          video: {
            source: 'p39_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '8%'
            }
          }
        }
      ]
    },
    '40': {
      static: [
        {
          image: 'pg40ichkann',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '71%'
            },
            zone: {
              top: '71%',
              bottom: '2%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p40_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '29%'
            }
          }
        }
      ]
    },
    '41': {
      video: [
        {
          video: {
            source: 'p41_v1'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '63%'
            }
          }
        },
        {
          video: {
            source: 'p41_v2'
          },
          trigger: {
            button: {
              top: '37%'
            },
            zone: {
              top: '37%',
              bottom: '10%'
            }
          }
        }
      ]
    },
    '42': {
      video: [
        {
          video: {
            source: 'p42_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '43': {
      static: [
        {
          image: 'pg43static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '49%'
            }
          }
        },
        {
          image: 'pg43static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '51%'
            },
            zone: {
              top: '51%',
              bottom: '34%'
            }
          }
        },
        {
          image: 'pg43static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '66%'
            },
            zone: {
              top: '66%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '44': {
      static: [
        {
          image: 'pg44static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '3%'
            },
            zone: {
              top: '3%',
              bottom: '73%'
            }
          }
        },
        {
          image: 'pg44static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '27%'
            },
            zone: {
              top: '27%',
              bottom: '48%'
            }
          }
        },
        {
          image: 'pg44static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '24%'
            }
          }
        },
        {
          image: 'pg44static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '76%'
            },
            zone: {
              top: '76%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '45': {
      static: [
        {
          image: 'pg45berts',
          audio: {
            source: 'pg45',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '46': {
      video: [
        {
          video: {
            source: 'p46_v1'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '50%'
            }
          }
        },
        {
          video: {
            source: 'p46_v2'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '47': {
      video: [
        {
          video: {
            source: 'p47_v1'
          },
          trigger: {
            button: {
              top: '86%'
            },
            zone: {
              top: '86%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '48': {
      static: [
        {
          image: 'pg48ex3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '48%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p48_v1'
          },
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '49': {
      exercise: [
        {
          type: 'typer',
          image: 'pg49ex1',
          title: 'ERGÄNZE!',
          trigger: {
            button: {
              top: '26%',
              right: '96%'
            },
            zone: {
              top: '20%',
              bottom: '42%',
              width: '46%'
            }
          },
          help: {
            toggle: false,
            text: 'COMPLETEAZA FOLOSIND CUVINTELE CORESPUNZATOARE IMAGINILOR. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '34.5%',
                left: '42%',
                width: '26%'
              },
              model: '',
              solution: 'VOGEL'
            },
            {
              identifier: 'two',
              position: {
                top: '42.5%',
                left: '42%',
                width: '26%'
              },
              model: '',
              solution: 'HUND'
            },
            {
              identifier: 'three',
              position: {
                top: '50.3%',
                left: '42%',
                width: '26%'
              },
              model: '',
              solution: 'FISCH'
            },
            {
              identifier: 'four',
              position: {
                top: '58.1%',
                left: '41.5%',
                width: '26%'
              },
              model: '',
              solution: 'KATZE'
            }
          ]
        },
        {
           type: 'linker',
           image: '02',
           title: 'VERBINDE!',
           trigger: {
             button: {
               top: '32%'
             },
             zone: {
               top: '20%',
               bottom: '42%',
               width: '40%',
               left: '51%'
             }
           },
           help: {
             toggle: false,
             text: 'UNESTE CULOAREA CU IMAGINEA CORESPUNZATOARE. Cand ai terminat apasa pe cheita si verifica. Succes!'
           },
           data: [
             {
                identifier: 'pasare',
                style: {
                  top: '9%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '49-pasare.png'
                },
                solution: 'blau',
                solutionImg: {
                  src: '49-pasare.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
                identifier: 'catel',
                style: {
                  top: '25%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '49-catel.png'
                },
                solution: 'braun',
                solutionImg: {
                  src: '49-catel.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
                identifier: 'peste',
                style: {
                  top: '53%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '49-peste.png'
                },
                solution: 'rot',
                solutionImg: {
                  src: '49-peste.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
                identifier: 'pisic',
                style: {
                  top: '67%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '49-pisic.png'
                },
                solution: 'orange',
                solutionImg: {
                  src: '49-pisic.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
               identifier: 'rot',
               style: {
                 top: '16%',
                 left: '65%',
                 width: '15%',
                 height: 'auto',
                 color: '#ef445f'
               },
               image: {
                  src: '49-rot.png'
                },
                sourceAnchors: ["LeftMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'orange',
               style: {
                 top: '29%',
                 left: '60%',
                 width: '25%',
                 height: 'auto',
                 color: '#f7a04b'
               },
               image: {
                  src: '49-orange.png'
                },
                sourceAnchors: ["LeftMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'blau',
               style: {
                 top: '42%',
                 left: '64%',
                 width: '17%',
                 height: 'auto',
                 color: '#33bcf1'
               },
               image: {
                  src: '49-blau.png'
                },
                sourceAnchors: ["LeftMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'braun',
               style: {
                 top: '55%',
                 left: '62%',
                 width: '21%',
                 height: 'auto',
                 color: '#874a38'
               },
               image: {
                  src: '49-braun.png'
                },
                sourceAnchors: ["LeftMiddle"],
                targetAnchors: []
             }
           ]
        },
        {
          type: 'type',
          title: 'RECHNE!',
          image: 'pg49ex2',
          trigger: {
            button: {
              top: '61%'
            },
            zone: {
              top: '61%',
              bottom: '2%'
            }
          },
          help: {
            toggle: false,
            text: 'NUMARA, CALCULEAZA SI SCRIE REZULTATUL. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '35%',
                left: '77.3%',
                width: '8%',
                height: '5.5%'
              },
              model: '',
              solution: '7'
            },
            {
              identifier: 'two',
              position: {
                top: '43%',
                left: '77.3%',
                width: '8%',
                height: '5.5%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'three',
              position: {
                top: '50.4%',
                left: '77.3%',
                width: '8%',
                height: '5.5%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'four',
              position: {
                top: '58%',
                left: '77.3%',
                width: '8%',
                height: '5.5%'
              },
              model: '',
              solution: '9'
            }
          ]
        }
      ]
    },
    '50': {
      exercise: [
        {
          type: 'picker',
          title: 'KREIS DIE RICHTIGE FORM EIN!',
          image: 'pg50ex3',
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '54%'
            }
          },
          help: {
            toggle: false,
            text: 'ALEGE FORMA CORECTA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '34.3%',
                left: '12.5%',
                width: '72%',
                height: '5.5%'
              },
              answer: {
                left: '8.5%',
                width: '41%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '42.8%',
                left: '12.5%',
                width: '72%',
                height: '5.5%'
              },
              answer: {
                left: '52.5%',
                width: '50%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '51.3%',
                left: '12.5%',
                width: '72%',
                height: '5.5%'
              },
              answer: {
                left: '51.5%',
                width: '35%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '59.8%',
                left: '12.5%',
                width: '72%',
                height: '5.5%'
              },
              answer: {
                left: '23.5%',
                width: '23%'
              }
            }
          ]
        },
        {
           type: 'linker',
           image: '02',
           title: 'VERBINDE!',
           trigger: {
             button: {
               top: '47%'
             },
             zone: {
               top: '47%',
               bottom: '5%',
             }
           },
           help: {
             toggle: false,
             text: 'UNESTE CUVANTUL CU FIGURA CORESPUNZATOARE. Cand ai terminat apasa pecheita si verifica. Succes!'
           },
           data: [
             {
                identifier: 'vater',
                style: {
                  top: '9%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '50-vater.png'
                },
                solution: 'der-vater',
                solutionImg: {
                  src: '50-vater.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
                identifier: 'opa',
                style: {
                  top: '40%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '50-opa.png'
                },
                solution: 'der-opa',
                solutionImg: {
                  src: '50-opa.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
                identifier: 'mutter',
                style: {
                  top: '69%',
                  left: '13%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '50-mutter.png'
                },
                solution: 'der-mutter',
                solutionImg: {
                  src: '50-mutter.png'
                },
                sourceAnchors: [],
                targetAnchors: ["RightMiddle"]
             },
             {
               identifier: 'der-opa',
               style: {
                 top: '19%',
                 left: '42%',
                 width: '15%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                  src: '50-der-opa.png'
                },
                sourceAnchors: ["LeftMiddle","RightMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'der-vater',
               style: {
                 top: '30%',
                 left: '41.5%',
                 width: '16%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                  src: '50-der-vater.png'
                },
                sourceAnchors: ["LeftMiddle","RightMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'der-bruder',
               style: {
                 top: '41%',
                 left: '41%',
                 width: '18%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                  src: '50-der-bruder.png'
                },
                sourceAnchors: ["LeftMiddle","RightMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'der-oma',
               style: {
                 top: '51%',
                 left: '42%',
                 width: '15%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                  src: '50-der-oma.png'
                },
                sourceAnchors: ["LeftMiddle","RightMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'der-mutter',
               style: {
                 top: '62%',
                 left: '41.5%',
                 width: '16%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                  src: '50-der-mutter.png'
                },
                sourceAnchors: ["LeftMiddle","RightMiddle"],
                targetAnchors: []
             },
             {
               identifier: 'der-schwester',
               style: {
                 top: '72%',
                 left: '40%',
                 width: '20%',
                 height: 'auto',
                 color: '#8bcb6a'
               },
               image: {
                  src: '50-der-schwester.png'
                },
                sourceAnchors: ["LeftMiddle","RightMiddle"],
                targetAnchors: []
             },
             {
                identifier: 'bruder',
                style: {
                  top: '9%',
                  left: '70%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '50-bruder.png'
                },
                solution: 'der-bruder',
                solutionImg: {
                  src: '50-bruder.png'
                },
                sourceAnchors: [],
                targetAnchors: ["LeftMiddle"]
             },
             {
                identifier: 'oma',
                style: {
                  top: '39%',
                  left: '70%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '50-oma.png'
                },
                solution: 'der-oma',
                solutionImg: {
                  src: '50-oma.png'
                },
                sourceAnchors: [],
                targetAnchors: ["LeftMiddle"]
             },
             {
                identifier: 'schwester',
                style: {
                  top: '65%',
                  left: '70%',
                  width: '15%',
                  height: 'auto'
                },
                image: {
                  src: '50-schwester.png'
                },
                solution: 'der-schwester',
                solutionImg: {
                  src: '50-schwester.png'
                },
                sourceAnchors: [],
                targetAnchors: ["LeftMiddle"]
             }
           ]
         }
      ]
    },
    '51': {
      exercise: [
        {
          type: 'typer',
          title: 'ERGÄNZE!',
          image: 'pg51ex5',
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '49%'
            }
          },
          help: {
            toggle: false,
            text: 'SCRIE CE STIE BERT PRIVIND IMAGINEA ALATURATA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '38.5%',
                left: '39%',
                width: '39%'
              },
              model: '',
              solution: 'SINGEN'
            },
            {
              identifier: 'two',
              position: {
                top: '46.5%',
                left: '39%',
                width: '39%'
              },
              model: '',
              solution: 'TANZEN'
            },
            {
              identifier: 'three',
              position: {
                top: '54%',
                left: '39%',
                width: '39%'
              },
              model: '',
              solution: 'KLATSCHEN'
            },
            {
              identifier: 'four',
              position: {
                top: '62%',
                left: '39%',
                width: '39%'
              },
              model: '',
              solution: 'SPRINGEN'
            }
          ]
        },
        {
          type: 'typer',
          title: 'ERGÄNZE!',
          image: 'pg51ex6',
          trigger: {
            button: {
              top: '53%'
            },
            zone: {
              top: '53%',
              bottom: '9%'
            }
          },
          help: {
            toggle: false,
            text: 'SCRIE CUM ESTE BERT PRIVIND IMAGINEA ALATURATA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '37.3%',
                left: '39%',
                width: '40%'
              },
              model: '',
              solution: 'FROH'
            },
            {
              identifier: 'two',
              position: {
                top: '45%',
                left: '39%',
                width: '40%'
              },
              model: '',
              solution: 'TRAURIG'
            },
            {
              identifier: 'three',
              position: {
                top: '52.8%',
                left: '39%',
                width: '40%'
              },
              model: '',
              solution: 'MÜDE'
            },
            {
              identifier: 'four',
              position: {
                top: '60.8%',
                left: '39%',
                width: '40%'
              },
              model: '',
              solution: 'ZORNIG'
            }
          ]
        }
      ]
    },
    '52': {
      exercise: [
        {
          type: 'typer',
          title: 'ERGÄNZE!',
          image: 'pg52ex7',
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '57%'
            }
          },
          help: {
            toggle: false,
            text: 'SCRIE NUMELE OBIECTULUI ILUSTRAT. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36.5%',
                left: '22%',
                width: '33%'
              },
              model: '',
              solution: 'TISCH'
            },
            {
              identifier: 'two',
              position: {
                top: '44.5%',
                left: '22%',
                width: '33%'
              },
              model: '',
              solution: 'STUHL'
            },
            {
              identifier: 'three',
              position: {
                top: '52.2%',
                left: '20%',
                width: '33%'
              },
              model: '',
              solution: 'TAFEL'
            },
            {
              identifier: 'four',
              position: {
                top: '60%',
                left: '22%',
                width: '33%'
              },
              model: '',
              solution: 'SCHRANK'
            }
          ]
        },
        {
          type: 'typer',
          title: 'ERGÄNZE!',
          image: 'pg52ex8',
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '46%',
              bottom: '15%'
            }
          },
          help: {
            toggle: false,
            text: 'PRIVESTE IMAGINILE ALATURATE SI SCRIE CE POATE BERT SA FACA. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '37%',
                left: '28%',
                width: '40%'
              },
              model: '',
              solution: 'LESEN'
            },
            {
              identifier: 'two',
              position: {
                top: '44.7%',
                left: '28%',
                width: '40%'
              },
              model: '',
              solution: 'SCHREIBEN'
            },
            {
              identifier: 'three',
              position: {
                top: '52.5%',
                left: '28%',
                width: '40%'
              },
              model: '',
              solution: 'SETZEN'
            },
            {
              identifier: 'four',
              position: {
                top: '60.5%',
                left: '28%',
                width: '40%'
              },
              model: '',
              solution: 'AUFSTEHEN'
            }
          ]
        }
      ]
    }
  }
}
