// FrontEnd
import ReactImg from '@/assets/svg/tools/react.svg'
import HtmlImg from '@/assets/svg/tools/html.svg'
import CssImg from '@/assets/svg/tools/css.svg'
import JsImg from '@/assets/svg/tools/js.svg'
import NextJsImg from '@/assets/svg/tools/nextjs.svg'
// Backend
import NodeJs from '@/assets/svg/tools/nodejs.svg'
import ExImg from '@/assets/svg/tools/ex.svg'
import PhpImg from '@/assets/svg/tools/php.svg'
import GolangImg from '@/assets/svg/tools/golang.svg'
// Mobile
import AndroidImg from '@/assets/svg/tools/android.svg'
import IosImg from '@/assets/svg/tools/ios.svg'
import FlutterImg from '@/assets/svg/tools/flutter.svg'
import SwiftImg from '@/assets/svg/tools/swift.svg'
// DevOps
import GitLabJs from '@/assets/svg/tools/gitlab.svg'
import GrafanaImg from '@/assets/svg/tools/grafana.svg'
import DockerImg from '@/assets/svg/tools/docker.svg'
import LokiImg from '@/assets/svg/tools/grafana-loki.png'
import DigitalOceanImg from '@/assets/svg/tools/digitalocean.svg'
import KubernetesImg from '@/assets/svg/tools/kubernetes.svg'
// UI/UX
import FigmaImg from '@/assets/svg/tools/figma.svg'
import PhotoshopImg from '@/assets/svg/tools/photoshop.svg'
import IllustratorImg from '@/assets/svg/tools/illustrator.svg'
// Testing
import JmentorImg from '@/assets/svg/tools/jmeter.svg'
import CypressImg from '@/assets/svg/tools/cypress.svg'

const toolData = [
  {
    name: "Frontend",
    tools: [
      { name: "HTML", imgSrc: HtmlImg },
      { name: "CSS", imgSrc: CssImg },
      { name: "JavaScript", imgSrc: JsImg },
      { name: "React", imgSrc: ReactImg },
      { name: "Next.Js", imgSrc: NextJsImg },
    ],
  },
  {
    name: "Backend",
    tools: [
      { name: "Node.js", imgSrc: NodeJs },
      { name: "Express", imgSrc: ExImg },
      { name: "Php", imgSrc: PhpImg },
      { name: "Golang", imgSrc: GolangImg },
    ],
  },
  {
    name: "Mobile",
    tools: [
      { name: "Android", imgSrc: AndroidImg },
      { name: "Ios", imgSrc: IosImg },
      { name: "Flutter", imgSrc: FlutterImg },
      { name: "Swift", imgSrc: SwiftImg },
    ],
  },
  {
    name: "DevOps",
    tools: [
      { name: "GitLab", imgSrc: GitLabJs },
      { name: "Grafana", imgSrc: GrafanaImg },
      { name: "Docker", imgSrc: DockerImg },
      { name: "Loki", imgSrc: LokiImg },
      { name: "DigitalOcean", imgSrc: DigitalOceanImg },
      { name: "Kubernetes", imgSrc: KubernetesImg },
    ],
  },
  {
    name: "UI/UX",
    tools: [
      { name: "Figma", imgSrc: FigmaImg },
      { name: "Photoshop", imgSrc: PhotoshopImg },
      { name: "Illustrator", imgSrc: IllustratorImg },
    ],
  },
  {
    name: "Testing",
    tools: [
      { name: "Cypress", imgSrc: CypressImg },
      { name: "Jmeter", imgSrc: JmentorImg },
    ],
  },
];

export default toolData;