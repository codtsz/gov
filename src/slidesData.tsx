import React from 'react';
import { 
  Users, 
  Brain, 
  Heart, 
  Cpu, 
  Mic, 
  Smartphone, 
  Home, 
  ShieldCheck, 
  BarChart3, 
  Repeat, 
  Network, 
  TrendingUp,
  ArrowRight,
  Target
} from 'lucide-react';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  points?: string[];
  icon?: React.ReactNode;
  layout: 'cover' | 'content' | 'split' | 'grid' | 'summary';
  extraContent?: React.ReactNode;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "破次元",
    subtitle: "基于AI对话硬件的适老化陪伴与认知干预解决方案",
    layout: 'cover'
  },
  {
    id: 2,
    title: "老龄化背景与社会挑战",
    points: [
      "人口老龄化进程加速，高龄、独居老人比例持续攀升",
      "社会养老负担日益加重，传统照护模式面临人力瓶颈",
      "数字化转型成为政府提升养老服务效能的关键路径"
    ],
    icon: <TrendingUp className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 3,
    title: "核心痛点：老年群体的隐形困境",
    points: [
      "认知衰退：阿尔茨海默症早期筛查与干预手段匮乏",
      "深度孤独：缺乏高质量的情感交流，心理健康易受忽视",
      "资源错配：基层社区照护人员难以实现1对1深度陪伴"
    ],
    icon: <Target className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 4,
    title: "全栈式解决方案",
    points: [
      "AI对话：基于大模型的自然语言交互，提供温和陪伴",
      "硬件终端：适老化定制硬件，降低数字鸿沟使用门槛",
      "认知训练：科学的记忆与逻辑训练，延缓认知功能衰退",
      "家属端小程序：实时同步动态，方便亲人随时了解老人近况"
    ],
    icon: <Brain className="w-12 h-12 text-accent" />,
    layout: 'split'
  },
  {
    id: 5,
    title: "产品形态：圆形智能陪伴终端",
    points: [
      "工业设计：极简圆形外观，小巧便携，5cm大小",
      "交互系统：全触控圆形屏幕 + 灵敏语音交互",
      "适老化设计：大图标、高对比度、符合老人视觉习惯"
    ],
    icon: <Smartphone className="w-12 h-12 text-accent" />,
    layout: 'split'
  },
  {
    id: 6,
    title: "核心功能：科学认知训练",
    points: [
      "多维训练：涵盖记忆力、注意力、语言及逻辑思维",
      "动态难度：AI根据老人表现自动调整训练强度",
      "趣味交互：通过对话游戏化方式，提升训练依从性"
    ],
    icon: <Cpu className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 7,
    title: "核心功能：全天候陪伴互动",
    points: [
      "情感陪伴：主动发起问候，倾听老人讲述，缓解孤独",
      "知识百科：随时解答生活常识，成为老人的“生活助手”",
      "生活提醒：用药提醒、天气预报、社区活动通知"
    ],
    icon: <Heart className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 8,
    title: "核心功能：记忆强化机制",
    points: [
      "生活记忆库：记录家庭成员信息与往事，辅助回忆",
      "重复训练：针对易忘信息进行科学的重复触发",
      "多模态反馈：语音引导与视觉辅助相结合，加深印象"
    ],
    icon: <Repeat className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 9,
    title: "核心功能：数字化数据评估",
    points: [
      "实时监测：记录训练数据与交互频率，生成健康画像",
      "预警系统：识别情绪异常或认知快速下滑，及时预警",
      "报告共享：定期向家属及社区医生推送专业评估报告"
    ],
    icon: <BarChart3 className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 10,
    title: "多维应用场景",
    points: [
      "居家养老：老人的“床头伴侣”，实现家庭智能化照护",
      "社区驿站：作为适老化改造标配，提升社区服务水平",
      "专业机构：辅助养老院护理员，提供标准化的康复训练"
    ],
    icon: <Home className="w-12 h-12 text-accent" />,
    layout: 'grid'
  },
  {
    id: 11,
    title: "政府与社会价值",
    points: [
      "提升效能：数字化手段缓解养老服务人力资源紧缺",
      "精准治理：通过大数据实现老年群体健康状况精准画像",
      "普惠养老：降低专业认知康复服务的获取门槛与成本"
    ],
    icon: <ShieldCheck className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 12,
    title: "落地模式建议",
    points: [
      "政企合作：政府购买服务，企业提供设备与技术支撑",
      "社区试点：选取典型社区开展“智慧养老”示范工程",
      "多方联动：打通民政、卫健与社区服务平台数据"
    ],
    icon: <Network className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 13,
    title: "实施路径规划",
    points: [
      "第一阶段：产品适配与社区试点（1-6个月）",
      "第二阶段：数据打通与服务闭环（6-12个月）",
      "第三阶段：全市域推广与生态构建（12个月以后）"
    ],
    icon: <ArrowRight className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 14,
    title: "未来拓展愿景",
    points: [
      "医疗集成：深度对接互联网医院，实现远程问诊",
      "生态开放：引入更多适老化第三方应用与内容",
      "算法升级：更精准的情感识别与更自然的对话体验"
    ],
    icon: <Cpu className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 15,
    title: "破次元｜产品理念与落地能力",
    points: [
      "理念：打破陪伴边界，让关怀持续发生。通过AI对话与适老化智能终端，为老年人提供可持续的陪伴与认知训练支持，在日常交流中实现记忆唤醒与认知激活。",
      "规模：累计服务用户超过15,000人，完成真实场景验证",
      "稳定：AI陪伴与认知训练系统稳定运行",
      "形态：已形成可触屏AI对话硬件产品形态",
      "交付：建立成熟生产体系，支持批量交付与快速部署"
    ],
    icon: <ShieldCheck className="w-12 h-12 text-accent" />,
    layout: 'content'
  },
  {
    id: 16,
    title: "智能老年陪伴与认知训练系统",
    subtitle: "用AI温暖晚年，让科技更有温度",
    layout: 'summary'
  }
];
