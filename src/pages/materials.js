import Icon1 from '../assets/materialsSrc/Icons/Icon1.png';
import Icon2 from '../assets/materialsSrc/Icons/Icon2.png';
import Icon3 from '../assets/materialsSrc/Icons/Icon3.png';
import Icon4 from '../assets/materialsSrc/Icons/Icon4.png';
import Icon5 from '../assets/materialsSrc/Icons/Icon5.png';
import Icon6 from '../assets/materialsSrc/Icons/Icon6.png';
import Icon7 from '../assets/materialsSrc/Icons/Icon7.png';
import Icon8 from '../assets/materialsSrc/Icons/Icon8.png';
import Icon9 from '../assets/materialsSrc/Icons/Icon9.png';
import Icon10 from '../assets/materialsSrc/Icons/Icon10.png';
import Img1 from '../assets/materialsSrc/terra34Img/Img1.png';
import Img2 from '../assets/materialsSrc/terra34Img/Img2.png';
import Img3 from '../assets/materialsSrc/terra34Img/Img3.png';
import Img4 from '../assets/materialsSrc/terraRoofImg/Img4.png';
import Img5 from '../assets/materialsSrc/terraRoofImg/Img5.png';
import Img6 from '../assets/materialsSrc/terraRoofImg/Img6.png';
import Img7 from '../assets/materialsSrc/geoImg/Img7.png'
import Img8 from '../assets/materialsSrc/geoImg/Img8.png'
import Img9 from '../assets/materialsSrc/geoImg/Img9.png'
import Img10 from '../assets/materialsSrc/geoImg/Img10.png'
import Img11 from '../assets/materialsSrc/geoImg/Img11.png'
import Img12 from '../assets/materialsSrc/acousticImg/Img12.png'
import Img13 from '../assets/materialsSrc/acousticImg/Img13.png'




const materials = [
 {
                id:1,
                name: 'URSA TERRA PRO 34 PN',
                img1: Img1,
                img2: Img2,
                img3: Img3,
                descTitle:'Негорючая минеральная тепло- и звукоизоляция.',
                descText:'Материал, произведенный с применением модернизированного полимерного связующего TERRA, предназначен для профессионального домостроения.URSA TERRA PRO отличается высокой упругостью, усиленной влагостойкостью и обладает отличными теплоизоляционными характеристиками в своем классе.Рекомендован для использования строительными бригадами и частными застройщиками.Материал безопасен для человека и окружающей среды.',
                teploλ10:'0,034 Вт/мК',
                teploλ25:'0,037 Вт/мК',
                teploλA: '0,037 Вт/мК',
                teploλB: '0,038 Вт/мК',
                AbilityToBurn: 'НГ (негорючий)',
                FireDangerClass: 'КМ0',
                WaterConsumptionAfter24HourSink: 'не более 1 кг/м²',
                TempOfUse: 'от -60 ºС до +220 ºС',
                dimensions: [
                    {
                        quantInBox: '8',
                        Volume: '0,244',
                        Area: '4,88',
                        Length: '1000',
                        Width: '610',
                        Thickness: '50'
                    },
                    {
                        quantInBox: '4',
                        Volume: '0,244',
                        Area: '2,44',
                        Length: '1000',
                        Width: '610',
                        Thickness: '100'
                    },
                    {
                        quantInBox: '10',
                        Volume: '0,305',
                        Area: '6,1',
                        Length: '1000',
                        Width: '610',
                        Thickness: '50'
                    },
                    {
                        quantInBox: '5',
                        Volume: '0,305',
                        Area: '3,05',
                        Length: '1000',
                        Width: '610',
                        Thickness: '100'
                    },
                    {
                        quantInBox: '24',
                        Volume: '0,915',
                        Area: '18,3',
                        Length: '1250',
                        Width: '610',
                        Thickness: '50'
                    },
                    {
                        quantInBox: '12',
                        Volume: '0,915',
                        Area: '9,15',
                        Length: '1250',
                        Width: '610',
                        Thickness: '100'
                    },
                ],
                recommendedUseCase: [
                    {text:'Трехслойные стены с облицовкой из кирпича',
                    img:Icon1 }, 
                    {text:'Стены с навесным вентилируемым фасадом на кронштейнах',
                    img:Icon1 },
                    {text:'Стены с наружной изоляцией по каркасу',
                    img:Icon1 },
                    {text:'Каркасные стены',
                    img:Icon1 },
                    {text:'Каркасные облицовки стен и перегородок',
                    img:Icon2 },
                     {text:'Перегородки из камней и блоков, изоляция в среднем слое',
                    img:Icon2 },
                     {text:'Акустические потолки',
                    img:Icon3 },
                    ],
                possibleUseCase: [
                  {text:'Скатные крыши с теплоизоляцией, установленной между и под стропилами',
                    img:Icon4 }, 
                    {text:'Стены из каркасных сэндвич-панелей',
                    img:Icon1 }, 
                    {text:'Полы по лагам, перекрытия по балкам',
                    img:Icon5 }, 
                    {text:'Теплоизоляция балкона/лоджии с использованием минеральной изоляции',
                    img:Icon6 },   
                ],
                sert: [{sert1:'sertOne'},
                {sert2:'sertTwo'}],
},
 {
                id:2,
                name: 'URSA TERRA Скатная крыша',
                img1: Img4,
                img2: Img5,
                img3: Img6,
                descTitle:'Негорючая минеральная тепло- и звукоизоляция.',
                descText:'«ПЛИТЫ в РУЛОНЕ» - материал, не имеющий аналогов на российском рынке. Произведен с применением немецкой технологии Spannfilz (нем. «упругий войлок»). Благодаря технологии Spannfilz, продукт обладает особой структурой и повышенной упругостью, что обеспечивает стабильное положение в конструкции на весь срок службы.Материал специально предназначен для применения в конструкциях скатных крыш. Обеспечивает эффективную теплоизоляцию, а также обладает отличными шумоизоляционными свойствами.Материал можно нарезать как вдоль, так и поперек, что особенно удобно при монтаже в конструкциях крыш с нестандартным шагом стропил.Материал безопасен для человека и окружающей среды.',
                teploλ10:'0,035 Вт/мК',
                teploλ25:'0,038 Вт/мК',
                teploλA: '0,039 Вт/мК',
                teploλB: '0,041 Вт/мК',
                AbilityToBurn: 'НГ (негорючий)',
                FireDangerClass: 'КМ0',
                WaterConsumptionAfter24HourSink: 'не более 1 кг/м²',
                TempOfUse: 'от -60 ºС до +220 ºС',
                dimensions: [
                    {
                        quantInBox: '1',
                        Volume: '0,549',
                        Area: '	5,4',
                        Length: '4500',
                        Width: '1200',
                        Thickness: '100'
                    },
                    {
                        quantInBox: '1',
                        Volume: '0,702',
                        Area: '4,68',
                        Length: '3900',
                        Width: '1200',
                        Thickness: '150'
                    },
                    {
                        quantInBox: '1',
                        Volume: '0,756',
                        Area: '4,2',
                        Length: '3500',
                        Width: '1200',
                        Thickness: '180'
                    },
                    {
                        quantInBox: '1',
                        Volume: '0,720',
                        Area: '3,6',
                        Length: '3000',
                        Width: '1200',
                        Thickness: '200'
                    }
                ],
                recommendedUseCase: [
                    {text:'Скатные крыши с теплоизоляцией, установленной между и под стропилами',
                    img:Icon1 }, 
                ],
                sert: [{sert1:'sertOne'},
                {sert2:'sertTwo'}],
},
 {
                id:3,
                name: 'URSA GEO ТЕПЛОСТАНДАРТ Плита',
                img1: Img7,
                img2: Img8,
                descTitle:'Негорючая минеральная тепло- и звукоизоляция.',
                descText:'Легкий универсальный материал, выпускаемый в форме плит толщиной 50 и 100 мм, рекомендуемый для использования в большинстве конструкций при строительстве и ремонте частных домов и квартир. Специально разработан с учетом потребностей частного застройщика, рекомендован для внутреннего применения, удобен тем, кто предпочитает работать с плитами.Материал безопасен для человека и окружающей среды и рекомендован для применения в детских дошкольных, лечебно-профилактических учреждениях и на предприятиях пищевой промышленности.Экономичный вариант тепло – и звукоизоляции для частного домостроения.',
                teploλ10:'0,040 Вт/мК',
                AbilityToBurn: 'НГ (негорючий)',
                FireDangerClass: 'КМ0',
                WaterConsumptionAfter24HourSink: 'не более 1 кг/м²',
                TempOfUse: 'от -60 ºС до +220 ºС',
                dimensions: [
                    {
                        quantInBox: '12',
                        Volume: '0,450',
                        Area: '9',
                        Length: '1230',
                        Width: '610',
                        Thickness: '50'
                    },
                    {
                        quantInBox: '6',
                        Volume: '0,450',
                        Area: '4,5',
                        Length: '1230',
                        Width: '610',
                        Thickness: '100'
                    }
                   
                ],
                recommendedUseCase: [
                    {text:'Полы по лагам, перекрытия по балкам',
                    img:Icon5 },
                   
                ],
                sert: [{sert1:'sertOne'},
                {sert2:'sertTwo'}],
},
 {
                id:4,
                name: 'URSA GEO П-20',
                img1: Img9,
                img2: Img10,
                img3: Img11,
                descTitle:'Негорючая минеральная тепло- и звукоизоляция.',
                descText:'Материал предназначен для тепло- и звукоизоляции наружных стен с установкой утеплителя снаружи и в среднем слое стены.Рекомендуется для использования в конструкциях навесных вентилируемых фасадов в качестве внутреннего слоя при двухслойном утеплении многоэтажных и высотных зданий.В малоэтажном строительстве может использоваться при однослойном утеплении и в качестве наружного слоя при двухслойном утеплении. Материал безопасен для человека и окружающей среды.',
                teploλ10:'0,034 Вт/мК',
                teploλ25:'0,037 Вт/мК',
                teploλA: '0,037 Вт/мК',
                teploλB: '0,038 Вт/мК',
                AbilityToBurn: 'НГ (негорючий)',
                FireDangerClass: 'КМ0',
                WaterConsumptionAfter24HourSink: 'не более 1 кг/м²',
                TempOfUse: 'от -60 ºС до +220 ºС',
                dimensions: [
                    {
                        quantInBox: '24',
                        Volume: '0,915',
                        Area: '18,3',
                        Length: '1250',
                        Width: '610',
                        Thickness: '50'
                    },
                    {
                        quantInBox: '14',
                        Volume: '0,840',
                        Area: '10,5',
                        Length: '1250',
                        Width: '600',
                        Thickness: '80'
                    },
                    {
                        quantInBox: '12',
                        Volume: '0,915',
                        Area: '9,2',
                        Length: '1250',
                        Width: '610',
                        Thickness: '100'
                    }
                ],
                recommendedUseCase: [
                    {text:'Трехслойные стены с облицовкой из кирпича',
                    img:Icon1 }, 
                    {text:'Стены с навесным вентилируемым фасадом на кронштейнах',
                    img:Icon1 },
                    {text:'Изоляция промышленного оборудования',
                    img:Icon7 },
                    {text:'Изоляция воздуховодов',
                    img:Icon7 }
                    ],
                possibleUseCase: [
                  {text:'Стены с наружной изоляцией по каркасу',
                    img:Icon1 }, 
                    {text:'Стены из каркасных сэндвич-панелей',
                    img:Icon1 }, 
                    {text:'Каркасные стены',
                    img:Icon1 }, 
                    {text:'Транспорт',
                    img:Icon8 },
                     {text:'Шумопоглощающие конструкции',
                    img:Icon9 }   
                ],
                sert: [{sert1:'sertOne'},
                {sert2:'sertTwo'}],
},
 {
                id:5,
                name: 'URSA PUREONE ЭКОАКУСТИК',
                img1: Img12,
                img2: Img13,
                descTitle:'Негорючая экологичная защита от шума',
                descText:'Уникальный материал произведённый по технологии PUREONE, рекомендован для применения в помещениях с высокими требованиями к экологическим и акустическим характеристикам.URSA PUREONE ЭКОАКУСТИК, рекомендован Научным центром здоровья детей РАМН для использования в строительстве и реконструкции детских садов, школ и лечебных учреждений. Материал естественного белого цвета удобен и приятен в работе, так как напоминает натуральный хлопок или шерсть.По результатам испытаний плиты URSA ЭКОАКУСТИК относятся к наилучшему классу звукопоглощения «A». Отличные звукоизоляционные свойства перегородок с использованием материала URSA ЭКОАКУСТИК подтверждены испытаниями в НИИ строительной физики РААСН (НИИСФ).Благодаря безопасному и эластичному акриловому связующему в волокнах материала возникает «эффект пружины» (англ. «clamping power»), что обеспечивает равномерность слоя изоляции и стабильное положение материала в конструкции.',
               
                AbilityToBurn: 'НГ (негорючий)',
                FireDangerClass: 'КМ0',
                WaterConsumptionAfter24HourSink: 'не более 1 кг/м²',
                TempOfUse: 'от -60 ºС до +220 ºС',
                dimensions: [
                    {
                        quantInBox: '10',
                        Volume: '0,381',
                        Area: '7,6',
                        Length: '1250',
                        Width: '610',
                        Thickness: '50'
                    }
                ],
                recommendedUseCase: [
                    {text:'Скатные крыши с теплоизоляцией, установленной между и под стропилами',
                    img:Icon4 }, 
                    {text:'Стены с наружной изоляцией по каркасу',
                    img:Icon1 },
                    {text:'Каркасные облицовки стен и перегородок',
                    img:Icon2 },
                    {text:'Перегородки из камней и блоков, изоляция в среднем слое',
                    img:Icon2 },
                    {text:'Акустические потолки',
                    img:Icon3 },
                     {text:'Транспорт',
                    img:Icon8 },
                     {text:'Шумопоглощающие конструкции',
                    img:Icon9 },
                ],
                possibleUseCase: [
                  {text:'Трехслойные стены с облицовкой из кирпича',
                    img:Icon1 }, 
                    {text:'Стены с навесным вентилируемым фасадом на кронштейнах',
                    img:Icon1 }, 
                    {text:'Полы по лагам, перекрытия по балкам',
                    img:Icon5 }, 
                    {text:'Теплоизоляция стен бань и саун',
                    img:Icon10 },   
                ],
                sert: [{sert1:'sertOne'},
                {sert2:'sertTwo'}],
},
]
export default materials