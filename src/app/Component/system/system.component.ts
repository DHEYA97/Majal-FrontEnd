import { Component } from '@angular/core';
import { SharedModuelModule } from '../../shared/shared-moduel/shared-moduel.module';
import { SystemItem } from '../../Core/Interfaces/SystemItem';
@Component({
  selector: 'app-system',
  standalone: true,
  imports: [SharedModuelModule],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {
  systems: SystemItem[] = [
    {
      id: 1, systemImage: '/images/system/01.jpg', title: 'ALL In One',
      main:`<iframe width="914" height="514" src="https://www.youtube.com/embed/FbtHYlYwDhg" title="مجال سوفت" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` , 
      images:[
        { src: '/images/system/01.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/05.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/06.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/07.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/08.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/09.jpg', title: 'Screen 4 Description' }
      ],
      features:[
        "انشاء الدليل المحاسبي",
        "متعدد الفروع والمستخدمين",
        "إصدار السندات",
        "الترابط مع الأنظمة الأخرى",
        "مرونة بناء الدليل المحاسبي",
        "إصدار سندات الدفع لعدة حسابات أو القبض من عدة حسابات",
        "مراقبة الموازنة الشهرية والسنوية",
        "فتح سنه جديدة وبدون أقفال السنة الحالية",
        "استخراج التقارير",
        "انشاء الدليل المحاسبي",
        ],
        content : ` نظام المحاسبة المالية هو مجموعة من العمليات والبرامج التي تهدف إلى تسجيل، تتبع، وتحليل المعاملات المالية للشركات. يساهم هذا النظام في تحقيق الشفافية والكفاءة من خلال توفير تقارير دقيقة ومحدثة عن الأداء المالي. كما يساعد في مراقبة النفقات والإيرادات، مما يمكن الشركات من اتخاذ قرارات استراتيجية مستندة إلى بيانات موثوقة. يعتمد النظام على معايير محاسبية محددة، ويعمل على تحسين التوافق مع القوانين والأنظمة المحلية والدولية، مما يعزز من مصداقية المؤسسة أمام الجهات الخارجية` 
    },
    { 
      id: 2, systemImage: '/images/system/02.jpg', title: 'الموارد البشرية' ,
      main:`<iframe width="914" height="514" src="https://www.youtube.com/embed/FbtHYlYwDhg" title="مجال سوفت" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` , 
      images:[
        { src: '/images/system/01.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/05.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/06.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/07.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/08.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/09.jpg', title: 'Screen 4 Description' }
      ],
      features:[
        "انشاء الدليل المحاسبي",
        "متعدد الفروع والمستخدمين",
        "إصدار السندات",
        "الترابط مع الأنظمة الأخرى",
        "مرونة بناء الدليل المحاسبي",
        "إصدار سندات الدفع لعدة حسابات أو القبض من عدة حسابات",
        "مراقبة الموازنة الشهرية والسنوية",
        "فتح سنه جديدة وبدون أقفال السنة الحالية",
        "استخراج التقارير",
        "انشاء الدليل المحاسبي",
        ],
        content : ` نظام المحاسبة المالية هو مجموعة من العمليات والبرامج التي تهدف إلى تسجيل، تتبع، وتحليل المعاملات المالية للشركات. يساهم هذا النظام في تحقيق الشفافية والكفاءة من خلال توفير تقارير دقيقة ومحدثة عن الأداء المالي. كما يساعد في مراقبة النفقات والإيرادات، مما يمكن الشركات من اتخاذ قرارات استراتيجية مستندة إلى بيانات موثوقة. يعتمد النظام على معايير محاسبية محددة، ويعمل على تحسين التوافق مع القوانين والأنظمة المحلية والدولية، مما يعزز من مصداقية المؤسسة أمام الجهات الخارجية
                    نهو نظام منظم لتتبع وتسجيل المعلومات المالية للشركة أو المؤسسة.`  
    },
    { 
      id: 3, systemImage: '/images/system/03.jpg', title: " المتاجر الالكترونية" ,
      main:`<iframe width="914" height="514" src="https://www.youtube.com/embed/FbtHYlYwDhg" title="مجال سوفت" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` , 
      images:[
        { src: '/images/system/01.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/05.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/06.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/07.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/08.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/09.jpg', title: 'Screen 4 Description' }
      ],
      features:[
        "انشاء الدليل المحاسبي",
        "متعدد الفروع والمستخدمين",
        "إصدار السندات",
        "الترابط مع الأنظمة الأخرى",
        "مرونة بناء الدليل المحاسبي",
        "إصدار سندات الدفع لعدة حسابات أو القبض من عدة حسابات",
        "مراقبة الموازنة الشهرية والسنوية",
        "فتح سنه جديدة وبدون أقفال السنة الحالية",
        "استخراج التقارير",
        "انشاء الدليل المحاسبي",
        ],
        content : ` نظام المحاسبة المالية هو مجموعة من العمليات والبرامج التي تهدف إلى تسجيل، تتبع، وتحليل المعاملات المالية للشركات. يساهم هذا النظام في تحقيق الشفافية والكفاءة من خلال توفير تقارير دقيقة ومحدثة عن الأداء المالي. كما يساعد في مراقبة النفقات والإيرادات، مما يمكن الشركات من اتخاذ قرارات استراتيجية مستندة إلى بيانات موثوقة. يعتمد النظام على معايير محاسبية محددة، ويعمل على تحسين التوافق مع القوانين والأنظمة المحلية والدولية، مما يعزز من مصداقية المؤسسة أمام الجهات الخارجية
                    نهو نظام منظم لتتبع وتسجيل المعلومات المالية للشركة أو المؤسسة.`  
    },
    { 
      id: 4, systemImage: '/images/system/04.jpg', title: ' Trust Pro' ,
      main:`<iframe width="914" height="514" src="https://www.youtube.com/embed/FbtHYlYwDhg" title="مجال سوفت" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` , 
      images:[
        { src: '/images/system/01.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/05.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/06.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/07.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/08.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/09.jpg', title: 'Screen 4 Description' }
      ],
      features:[
        "انشاء الدليل المحاسبي",
        "متعدد الفروع والمستخدمين",
        "إصدار السندات",
        "الترابط مع الأنظمة الأخرى",
        "مرونة بناء الدليل المحاسبي",
        "إصدار سندات الدفع لعدة حسابات أو القبض من عدة حسابات",
        "مراقبة الموازنة الشهرية والسنوية",
        "فتح سنه جديدة وبدون أقفال السنة الحالية",
        "استخراج التقارير",
        "انشاء الدليل المحاسبي",
        ],
        content : ` نظام المحاسبة المالية هو مجموعة من العمليات والبرامج التي تهدف إلى تسجيل، تتبع، وتحليل المعاملات المالية للشركات. يساهم هذا النظام في تحقيق الشفافية والكفاءة من خلال توفير تقارير دقيقة ومحدثة عن الأداء المالي. كما يساعد في مراقبة النفقات والإيرادات، مما يمكن الشركات من اتخاذ قرارات استراتيجية مستندة إلى بيانات موثوقة. يعتمد النظام على معايير محاسبية محددة، ويعمل على تحسين التوافق مع القوانين والأنظمة المحلية والدولية، مما يعزز من مصداقية المؤسسة أمام الجهات الخارجية
                    نهو نظام منظم لتتبع وتسجيل المعلومات المالية للشركة أو المؤسسة.`  
    },
  ];
}
