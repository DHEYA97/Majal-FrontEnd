import { Component, OnInit } from '@angular/core';
import { SharedModuelModule } from '../../shared/shared-moduel/shared-moduel.module';
import { ActivatedRoute } from '@angular/router';
import { SystemItem } from '../../Core/Interfaces/SystemItem';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-system-detailes',
  standalone: true,
  imports: [SharedModuelModule],
  templateUrl: './system-detailes.component.html',
  styleUrl: './system-detailes.component.scss'
})
export class SystemDetailesComponent implements OnInit{
  system :SystemItem | null = null;
  systems: SystemItem[] = [
    {
      id: 1, systemImage: '/images/system/01.jpg', title: 'ALL In One',
      main:`<iframe class="w-100" height="514" src="https://www.youtube.com/embed/FbtHYlYwDhg" title="مجال سوفت" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` , 
      images:[
        { src: '/images/system/01.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/05.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/06.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/07.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/08.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/09.jpg', title: 'Screen 4 Description' },
      ],
      features:[
        "متجر إلكتروني متكامل",
        "برنامج محاسبي شامل",
        "تطبيق جوال",
        "نقاط بيع متقدمة",
        "مرونة الاستخدام",
        "شامل ومتعدد الاستخدامات",
        "مرن وقابل للتخصيص",
        "حديث ومتوافق",
        "سهل الاستخدام ",
        "قوي وآمن ",
        "ميزات متقدمة",
      ],
        content : `
<div>
    <h2>نظام ALL IN ONE من MAJAL</h2>
    <p>
        يعتبر نظام <strong>ALL IN ONE</strong> من <strong>MAJAL</strong> حلاً تقنيًا متكاملاً لتلبية احتياجات الشركات الصغيرة والمتوسطة والكبيرة. يوفر هذا النظام الأدوات التي تحتاجها لإدارة أعمالك بفعالية، من المبيعات والشراء إلى المحاسبة والمخزون.
    </p>
    <p>
        يمكنك من خلاله إنشاء متجر إلكتروني جذاب، وزيادة مبيعاتك عبر الوصول إلى قاعدة عملاء أكبر. كما يقدم برنامجًا محاسبيًا شاملاً يتوافق مع القوانين المحلية، ويشمل تطبيقًا جوالًا لإدارة أعمالك من أي مكان.
    </p>
    <p>
        يتميز النظام بواجهة بسيطة وقابلة للتخصيص، تناسب احتياجات عملك سواء كان مطعمًا صغيرًا أو شركة تجارة كبيرة. فهو يجمع كل الأدوات في نظام واحد متكامل، مما يقلل من الأخطاء ويوفر الوقت والجهد.
    </p>
    <p>
        يوفر لك النظام تقارير وتحليلات لمتابعة أداء مبيعاتك، وتحليل تكاليفك، وتحسين كفاءة عملك وزيادة الأرباح. باختصار، <strong>ALL IN ONE</strong> هو الحل المثالي لإدارة أعمالك بكفاءة وسهولة.
    </p>
</div>

        ` 
    },
    { 
      id: 2, systemImage: '/images/system/02.jpg', title: 'الموارد البشرية' ,
      main:`<img src="/images/system/02.jpg" class="w-100"/>` , 
      images:[
        { src: '/images/system/02.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/10.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/11.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/12.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/13.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/14.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/15.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/16.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/17.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/18.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/19.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/20.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/21.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/22.jpg', title: 'Screen 4 Description' },
      ],
      features:[
        "إدارة شاملة للموظفين",
        "إدارة رواتب سهلة",
        "توظيف وإدماج سلس",
        "تقارير وتحليلات مفصلة",
        "أمان وحماية للبيانات",
        "تكامل مع المنصات الحكومية",
        "سهولة الاستخدام",
        "دعم فني متميز",
        "إدارة الموظفين بسهولة",
        "رواتب دقيقة في وقت قياسي",
        "توظيف سلس وإدماج ناجح",
        "قرارات أفضل بفضل التقارير والتحليلا",
        "حماية بياناتك",
        "تكامل كامل وسهولة الاستخدام",
        "دعم فني متميز على مدار الساعة",
        ],
        content : `
          <div>
    <h2>شريكك الاستراتيجي في إدارة الكفاءات</h2>
    <p>
        في عالم الأعمال المتسارع، أصبح الاعتماد على نظام إدارة موارد بشرية متكامل ضرورة ملحة. هذا النظام يقدم حلولًا شاملة لإدارة القوى العاملة، بدءًا من التوظيف وحتى التقاعد، مما يتيح توحيد جميع بيانات الموظفين في قاعدة بيانات مركزية للوصول السريع للمعلومات.
    </p>
    <p>
        يمكنك تتبع معلومات الموظفين الشخصية والمهنية مثل الخبرات وسجلات الحضور والغياب، مما يضمن دقة البيانات ويوفر الوقت والجهد. يقوم النظام أيضًا بأتمتة العمليات الروتينية مثل حساب الرواتب بدقة وسرعة، بالإضافة إلى إدارة عملية التوظيف من نشر الإعلانات إلى تقديم العروض الوظيفية.
    </p>
    <p>
        يساعد النظام في دعم اتخاذ القرارات الاستراتيجية من خلال تحليل البيانات، وتحديد احتياجات الشركة من الكفاءات وتقييم أداء الموظفين. كما يساهم في تعزيز مشاركة الموظفين من خلال بوابة ذاتية الخدمة تتيح لهم الوصول إلى معلوماتهم وتقديم الطلبات.
    </p>
    <p>
        باختصار، النظام المتكامل يساعد الشركات على إدارة مواردها البشرية بكفاءة، مع التركيز على المهام الاستراتيجية وتطوير فريق عمل قوي.
    </p>
</div>

        `  
    },
    { 
      id: 3, systemImage: '/images/system/33.jpg', title: " المطاعم" ,
      main:`<img src="/images/system/34.jpg" class="w-100"/>` , 
      images:[
        { src: '/images/system/33.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/34.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/35.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/36.jpg', title: 'Screen 4 Description' },
      ],
      features:[
        "إدارة شاملة",
        "مرونة عالية",
        "توافق مع هيئة الزكاة ",
        "تكنولوجيا متقدمة",
        "سهولة الاستخدام",
        "تحليل البيانات",
        "تكامل مع القنوات الإلكترونية",
        "إدارة المخزون",
        "إدارة الموظفين",
        "أمان البيانات",
        "تخصيص عالي",
        "دعم متعدد اللغات",
        "تحديثات مستمرة",
        
      ],
        content : ` 
        <div>
    <h2>نظام المطاعم</h2>
    <p>
        نظام <strong>المطاعم</strong> هو حل شامل لإدارة المطاعم والمقاهي، يغطي جوانب المبيعات، المخزون، الموظفين، والمحاسبة. بواجهة سهلة الاستخدام، يتيح للمستخدمين إدارة أعمالهم بدقة وكفاءة.
    </p>
    <p>
        يوفر النظام تقارير مفصلة وأدوات تحليلية لتحسين الأداء وزيادة الأرباح، مع تكامل مع القنوات الإلكترونية لزيادة المبيعات والوصول إلى جمهور أوسع.
    </p>
    <ul>
        <li>سهل الاستخدام: واجهة بديهية.</li>
        <li>دقيق: يوفر بيانات موثوقة.</li>
        <li>آمن: يحمي بياناتك بتقنيات متطورة.</li>
    </ul>
</div>

        `  
    },
    { 
      id: 4, systemImage: '/images/system/03.jpg', title: " المتاجر الالكترونية" ,
      main:`<img src="/images/system/03.jpg" class="w-100"/>` , 
      images:[
        { src: '/images/system/03.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/30.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/31.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/32.jpg', title: 'Screen 4 Description' },
      ],
      features:[
        "مرونة وتخصيص عالي.",
        "سهولة الاستخدام.",
        "قوالب جاهزة.",
        "إدارة المنتجات.",
        "نظام الدفع الآمن",
        "تحسين محركات البحث .",
        "تحليلات التسويق.",
        "دعم العملاء",
        "تكامل مع وسائل التواصل الاجتماعي.",
        "توسع سهل",
        ],
        content : ` 
          <div>
    <h2>خدمة تصميم متاجرك الإلكترونية</h2>
    <p>
        تخيل أن يكون لديك متجرك الخاص على الإنترنت يعكس هويتك ويعمل على مدار الساعة. مع خدماتنا المتخصصة في تصميم المتاجر الإلكترونية، هذا الحلم يصبح حقيقة. نقدم حلولًا متكاملة، بدءًا من تصميم واجهة جذابة وسهلة الاستخدام إلى إدارة المنتجات والطلبات.
    </p>
    <p>
        فريقنا سيعمل معك عن كثب لفهم احتياجاتك وتقديم تصميم مخصص يناسب طبيعة عملك. نستخدم أحدث التقنيات لضمان سرعة وأمان متجرك الإلكتروني، مع توفير ميزات تساعدك على إدارة متجرك بفعالية.
    </p>
    <p>
        مع خدمتنا، ستصل إلى جمهور أوسع وتوسع نطاق أعمالك، حيث يمكنك بيع منتجاتك وخدماتك للعملاء في أي مكان. تواصل معنا لمعرفة المزيد وكيف نساعدك في النجاح في عالم التجارة الإلكترونية.
    </p>
</div>
        `  
    },
    { 
      id: 5, systemImage: '/images/system/04.jpg', title: ' Trust Pro' ,
      main:`<iframe class="w-100" height="480" src="https://www.youtube.com/embed/cXBmaJxfgDo" title="فيديو التعريفي" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` , 
      images:[
        { src: '/images/system/04.jpg', title: 'Screen 1 Description' },
        { src: '/images/system/23.jpg', title: 'Screen 2 Description' },
        { src: '/images/system/24.jpg', title: 'Screen 3 Description' },
        { src: '/images/system/25.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/26.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/27.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/28.jpg', title: 'Screen 4 Description' },
        { src: '/images/system/29.jpg', title: 'Screen 4 Description' },
      ],
      features:[
        "شامل ومتكامل",
        "سهل الاستخدام",
        "مرن وقابل للتخصيص",
        "قوي وآمن",
        "حديث ومتطور",
        "يدعم اللغات المتعددة",
        "دعم فني متميز",
        "تحديثات مستمرة",
        "تكامل مع أنظمة أخرى",
        "تقارير وتحليلات متقدمة",
        "مرونة في النشر",
        "أسعار تنافسية",
        "فريق عمل متخصص",
      ],
        content : ` 
          <div>
    <h2>نظام ترست برو لإدارة الأعمال المالية والإدارية</h2>
    <p>
        نظام <strong>ترست برو</strong> هو الحل المثالي للشركات التي ترغب في إدارة جميع جوانب أعمالها بسهولة وكفاءة. يغطي النظام المحاسبة، إدارة المخازن، المبيعات، والتكاليف. يوفر النظام منصة موحدة لجميع العمليات المالية والإدارية، مما يسهم في توفير الوقت والجهد وتقليل الأخطاء.
    </p>
    <p>
        يوفر <strong>ترست برو</strong> أدوات تحليلية قوية لمساعدتك في اتخاذ قرارات مستنيرة وتحسين أداء عملك. كما يتوافق مع أحدث القوانين المحلية لضمان دقة السجلات المالية وحماية الشركة من المخالفات.
    </p>
    <p>
        بفضل واجهة بسيطة وسهلة الاستخدام، يمكنك التنقل بسهولة بين ميزات النظام المختلفة. كما أن النظام مرن وقابل للتخصيص، مما يجعله مناسبًا لمختلف أنواع الشركات.
    </p>
    <p>
        نظام <strong>ترست برو</strong> هو الخيار الأمثل لإدارة أعمالك بكفاءة ومرونة.
    </p>
</div>

        `  
    },
  ];
  Id!:number
  isOpen = false;
  currentIndex = 0;
  mainContent!: SafeHtml;
  Content!: SafeHtml;
    constructor(private _router :ActivatedRoute,private sanitizer: DomSanitizer){
    }
      
    ngOnInit(): void {
      this._router.params.subscribe(params => {
        this.Id = +params['id']; 
        this.fetchBlogDetails(this.Id); 
      });
      }
      fetchBlogDetails(id: number): void {
        this.system = this.systems.find(x=>x.id == this.Id) ?? null;
        this.mainContent = this.sanitizer.bypassSecurityTrustHtml(this.system!.main);
        this.Content = this.sanitizer.bypassSecurityTrustHtml(this.system!.content);
      }
      openSlider(index: number) {
        this.currentIndex = index;
        this.isOpen = true;
      }
    
      closeSlider() {
        this.isOpen = false;
      }
    
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.system!.images.length;
      }
    
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.system!.images.length) % this.system!.images.length;
      }
}
