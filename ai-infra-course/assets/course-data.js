window.COURSE = {
  "title": "从零认识 AI Infra",
  "subtitle": "一个请求背后的计算、缓存与服务",
  "version": "1.1",
  "reviewed": "2026-11-04",
  "chapters": [
    "AI Infra 解决什么问题",
    "GPU 与计算软件",
    "模型如何训练出来",
    "一个请求如何生成答案",
    "如何服务更多用户",
    "一次请求的完整旅程"
  ],
  "references": {
    "cuda": {
      "title": "CUDA Programming Guide",
      "url": "https://docs.nvidia.com/cuda/cuda-programming-guide/",
      "accessed": "2026-11-01"
    },
    "cuda_legacy": {
      "title": "CUDA C++ Programming Guide 历史版",
      "url": "https://docs.nvidia.com/cuda/cuda-c-programming-guide/",
      "accessed": "2026-11-01"
    },
    "triton": {
      "title": "Triton 官方文档",
      "url": "https://triton-lang.org/main/index.html",
      "accessed": "2026-11-01"
    },
    "pytorch": {
      "title": "PyTorch Learn the Basics",
      "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html",
      "accessed": "2026-11-01"
    },
    "distributed": {
      "title": "PyTorch Distributed Overview",
      "url": "https://docs.pytorch.org/tutorials/beginner/dist_overview.html",
      "accessed": "2026-11-01"
    },
    "flash": {
      "title": "FlashAttention 原始论文 2022",
      "url": "https://arxiv.org/abs/2205.14135",
      "accessed": "2026-11-01"
    },
    "paged": {
      "title": "PagedAttention 与 vLLM 原始论文 2023",
      "url": "https://arxiv.org/abs/2309.06180",
      "accessed": "2026-11-01"
    },
    "vllm": {
      "title": "vLLM 官方文档",
      "url": "https://docs.vllm.ai/en/latest/",
      "accessed": "2026-11-01"
    },
    "prefix": {
      "title": "vLLM Automatic Prefix Caching",
      "url": "https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/",
      "accessed": "2026-11-01"
    },
    "metrics": {
      "title": "vLLM Metrics",
      "url": "https://docs.vllm.ai/en/latest/design/metrics/",
      "accessed": "2026-11-01"
    },
    "sglang": {
      "title": "SGLang 官方文档",
      "url": "https://docs.sglang.io/",
      "accessed": "2026-11-01"
    },
    "cache": {
      "title": "Transformers How caching works",
      "url": "https://huggingface.co/docs/transformers/cache_explanation",
      "accessed": "2026-11-01"
    },
    "attention": {
      "title": "Attention Is All You Need 原始论文 2017",
      "url": "https://arxiv.org/abs/1706.03762",
      "accessed": "2026-11-01"
    },
    "orca": {
      "title": "Orca 迭代级调度论文 OSDI 2022",
      "url": "https://www.usenix.org/conference/osdi22/presentation/yu",
      "accessed": "2026-11-01"
    },
    "quant": {
      "title": "Transformers Quantization Overview",
      "url": "https://huggingface.co/docs/transformers/quantization/overview",
      "accessed": "2026-11-01"
    },
    "docker": {
      "title": "Docker Overview",
      "url": "https://docs.docker.com/get-started/docker-overview/",
      "accessed": "2026-11-01"
    },
    "k8s": {
      "title": "Kubernetes Overview",
      "url": "https://kubernetes.io/docs/concepts/overview/",
      "accessed": "2026-11-01"
    },
    "ray": {
      "title": "Ray on Kubernetes",
      "url": "https://docs.ray.io/en/latest/cluster/kubernetes/index.html",
      "accessed": "2026-11-01"
    },
    "cublas": {
      "title": "cuBLAS 官方文档",
      "url": "https://docs.nvidia.com/cuda/cublas/",
      "accessed": "2026-11-01"
    },
    "cudnn": {
      "title": "cuDNN 官方文档",
      "url": "https://docs.nvidia.com/cudnn/overview",
      "accessed": "2026-11-01"
    },
    "trt": {
      "title": "TensorRT LLM 官方文档",
      "url": "https://nvidia.github.io/TensorRT-LLM/",
      "accessed": "2026-11-01"
    },
    "deepspeed": {
      "title": "DeepSpeed 官方文档",
      "url": "https://www.deepspeed.ai/",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "megatron": {
      "title": "Megatron-LM 官方仓库",
      "url": "https://github.com/NVIDIA/Megatron-LM",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "nccl": {
      "title": "NCCL User Guide",
      "url": "https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "nsys": {
      "title": "Nsight Systems User Guide",
      "url": "https://docs.nvidia.com/nsight-systems/UserGuide/index.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "ncu": {
      "title": "Nsight Compute Profiling Guide",
      "url": "https://docs.nvidia.com/nsight-compute/ProfilingGuide/index.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "cutlass": {
      "title": "CUTLASS 官方文档",
      "url": "https://docs.nvidia.com/cutlass/latest/",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "raycore": {
      "title": "Ray Core 官方文档",
      "url": "https://docs.ray.io/en/latest/ray-core/walkthrough.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "http": {
      "title": "HTTP Semantics RFC 9110",
      "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "awq": {
      "title": "AWQ 原始论文",
      "url": "https://arxiv.org/abs/2306.00978",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "gptq": {
      "title": "GPTQ 原始论文",
      "url": "https://arxiv.org/abs/2210.17323",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "spec": {
      "title": "Speculative Decoding 原始论文",
      "url": "https://arxiv.org/abs/2211.17192",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "pods": {
      "title": "Kubernetes Pods",
      "url": "https://kubernetes.io/docs/concepts/workloads/pods/",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "vllmopt": {
      "title": "vLLM Optimization and Tuning",
      "url": "https://docs.vllm.ai/en/latest/configuration/optimization/",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "vllmpd": {
      "title": "vLLM Disaggregated Prefilling",
      "url": "https://docs.vllm.ai/en/latest/features/disagg_prefill/",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "npu": {
      "title": "Intel AI Hardware",
      "url": "https://www.intel.com/content/www/us/en/learn/ai-hardware.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "gpu": {
      "title": "CUDA Guide Introduction",
      "url": "https://docs.nvidia.com/cuda/cuda-programming-guide/01-introduction/introduction.html",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "agent": {
      "title": "Anthropic Building effective agents",
      "url": "https://www.anthropic.com/research/building-effective-agents",
      "accessed": "2026-11-01",
      "note": "扩展阅读；不据此提供版本特定性能结论"
    },
    "rest": {
      "title": "Fielding REST 架构约束 原始论文",
      "url": "https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
      "accessed": "2026-11-01"
    },
    "cuda_vector_add": {
      "title": "CUDA C++ 编程指南 向量加法",
      "url": "https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/intro-to-cuda-cpp.html",
      "accessed": "2026-11-03"
    },
    "triton_vector_add": {
      "title": "Triton 官方教程 向量加法",
      "url": "https://triton-lang.org/main/getting-started/tutorials/01-vector-add.html",
      "accessed": "2026-11-03"
    },
    "pytorch_autograd": {
      "title": "PyTorch Automatic Differentiation with torch.autograd",
      "url": "https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html",
      "accessed": "2026-11-04"
    },
    "vllm_scheduler": {
      "title": "vLLM 推理引擎与统一调度",
      "url": "https://vllm-project.github.io/2025/09/05/anatomy-of-vllm.html",
      "accessed": "2026-11-04"
    },
    "fsdp": {
      "title": "PyTorch Fully Sharded Data Parallel",
      "url": "https://docs.pytorch.org/docs/stable/fsdp.html",
      "accessed": "2026-11-04"
    },
    "llama3": {
      "title": "Meta Llama 3 模型论文与架构参数",
      "url": "https://arxiv.org/html/2407.21783",
      "accessed": "2026-11-04"
    }
  },
  "slides": [
    {
      "id": "S01",
      "chapter": 1,
      "title": "聊天机器人怎样服务更多人？",
      "subtitle": "从一次问答到一批同时到达的请求",
      "kind": "opening",
      "targetSeconds": 60,
      "terms": [
        "AI Infra",
        "LLM",
        "Concurrency"
      ],
      "sources": [
        "vllm",
        "metrics",
        "vllm_scheduler"
      ],
      "steps": [
        {
          "label": "输入第一条问题",
          "narration": "同一个聊天模型，有时马上就开始回答，有时得等好几秒。它在等什么？",
          "phase": [
            0,
            1800
          ],
          "id": "S01.0",
          "estimatedSeconds": 8
        },
        {
          "label": "发送第一条问题",
          "narration": "先发一条问题试试。",
          "phase": [
            0,
            550
          ],
          "id": "S01.1",
          "estimatedSeconds": 3
        },
        {
          "label": "请求抵达服务端",
          "narration": "这条消息送到服务端，模型才能用它来生成回答。",
          "phase": [
            550,
            2220
          ],
          "id": "S01.4",
          "frame": 1,
          "estimatedSeconds": 5
        },
        {
          "label": "回复开头返回",
          "narration": "模型刚算出一截文字，聊天窗口就能先显示这一截。",
          "phase": [
            2220,
            4910
          ],
          "id": "S01.5",
          "frame": 1,
          "estimatedSeconds": 6
        },
        {
          "label": "流式补全回答",
          "narration": "后面的文字接着传回来，这就是我们看到的流式回答。",
          "phase": [
            4910,
            6900
          ],
          "id": "S01.6",
          "frame": 1,
          "estimatedSeconds": 6
        },
        {
          "label": "更多人打开聊天窗口",
          "narration": "现在换个情况，十二个人几乎同时向这个模型提问。",
          "phase": [
            0,
            710
          ],
          "id": "S01.2",
          "estimatedSeconds": 5
        },
        {
          "label": "十二条请求汇入同一个入口",
          "narration": "这些请求挤进同一个入口。谁能先算？生成到一半还能接新人吗？",
          "phase": [
            710,
            4300
          ],
          "id": "S01.7",
          "frame": 2,
          "estimatedSeconds": 8
        },
        {
          "label": "四条请求用满缓存预算",
          "narration": "假设这次显存留给缓存的空间，刚好够前四条请求同时生成，另外八条先排队。",
          "phase": [
            0,
            4700
          ],
          "id": "S01.3",
          "estimatedSeconds": 9
        },
        {
          "label": "第 05 条等待缓存释放",
          "narration": "第五条是「推荐一道晚餐」。它已经到了，但得等正在生成的请求释放缓存。",
          "phase": [
            4700,
            8500
          ],
          "id": "S01.8",
          "frame": 3,
          "estimatedSeconds": 8
        },
        {
          "label": "释放的缓存交给第 05 条",
          "narration": "第一条答完，腾出了足够的空间，调度器就能安排第五条开始算。",
          "phase": [
            8500,
            10500
          ],
          "id": "S01.9",
          "frame": 3,
          "estimatedSeconds": 7
        },
        {
          "label": "标出首段文字出现的时刻",
          "narration": "第五条比前四条多等了一段队列时间，轮到它以后，还要等模型算出回答的开头。",
          "phase": [
            10500,
            12400
          ],
          "id": "S01.10",
          "frame": 3,
          "estimatedSeconds": 8
        },
        {
          "label": "重放单卡分配",
          "narration": "用同一批问题再试一次，先看一张卡。第五条还是得等。",
          "phase": [
            16200,
            19500
          ],
          "id": "S01.11",
          "frame": 3,
          "estimatedSeconds": 6
        },
        {
          "label": "重放双卡分配",
          "narration": "两张卡各放一份完整模型，分开接请求。这样，第五条一开始就能在第二张卡上算。",
          "phase": [
            19500,
            22600
          ],
          "id": "S01.12",
          "frame": 3,
          "estimatedSeconds": 9
        },
        {
          "label": "从队列转向 GPU 与显存",
          "narration": "加卡有成本。想弄清一张卡还能多接多少请求，得先看看显存里放了什么，GPU 又在算什么。",
          "phase": [
            22600,
            24100
          ],
          "id": "S01.13",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 97,
      "transition": "读完后按 Space，进入下一页第一句。",
      "demo": {
        "question": "什么是人工智能？",
        "answer": [
          "人工智能是一类让计算机完成某些",
          "通常需要人类智能才能完成的任务的技术。",
          "例如，识别照片里的物体，或回答你的问题。"
        ],
        "otherQuestions": [
          "解释光合作用",
          "写一封请假邮件",
          "把这句话译成英文",
          "推荐一道晚餐",
          "月亮为什么会圆？",
          "帮我检查这段代码",
          "总结这篇文章",
          "怎么整理旅行行李？",
          "解释二进制",
          "帮我拟一个标题",
          "算一下这笔账"
        ],
        "followUp": "再举一个例子",
        "cacheCapacity": 4
      }
    },
    {
      "id": "S02",
      "chapter": 1,
      "title": "算法、应用与基础设施",
      "subtitle": "用长文档问答说明三类工作的分工",
      "kind": "roles",
      "targetSeconds": 60,
      "terms": [
        "AI Infra",
        "Training",
        "Inference",
        "Model Serving"
      ],
      "sources": [
        "pytorch",
        "vllm"
      ],
      "steps": [
        {
          "label": "报销提问",
          "narration": "换一个聊天场景，有人在公司知识库里问，报销最晚哪天提交？",
          "phase": [
            0,
            450
          ],
          "id": "S02.0",
          "estimatedSeconds": 8
        },
        {
          "label": "对照模型回答和手册原文",
          "narration": "模型回答十天内，可手册写的是返程后十个工作日内。",
          "phase": [
            450,
            1230
          ],
          "id": "S02.4",
          "frame": 0,
          "estimatedSeconds": 7
        },
        {
          "label": "检查模型是否读准条件",
          "narration": "模型有没有读准“工作日”这个条件，是算法团队要检验的问题。",
          "phase": [
            1230,
            1690
          ],
          "id": "S02.5",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "检索出差旅条款",
          "narration": "应用收到同一个问题后，先从知识库找到差旅报销办法的第四条。",
          "phase": [
            0,
            910
          ],
          "id": "S02.1",
          "estimatedSeconds": 9
        },
        {
          "label": "展示带引用的回答",
          "narration": "应用把原文和问题一起交给模型，再显示带引用的回答，用户就能回去核对。",
          "phase": [
            910,
            1480
          ],
          "id": "S02.6",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "报销问答进入等待区",
          "narration": "请求多的时候，基础设施先让这条报销问答在左边等一个执行位置。",
          "phase": [
            0,
            440
          ],
          "id": "S02.2",
          "estimatedSeconds": 9
        },
        {
          "label": "把请求交给 GPU",
          "narration": "轮到它时，调度系统把这条问答交给 GPU。",
          "phase": [
            440,
            1480
          ],
          "id": "S02.7",
          "frame": 2,
          "estimatedSeconds": 6
        },
        {
          "label": "显示 GPU 上的缓存占用",
          "narration": "GPU 执行时，还要给稍后会用到的数据留出显存。",
          "phase": [
            1480,
            2280
          ],
          "id": "S02.8",
          "frame": 2,
          "estimatedSeconds": 7
        },
        {
          "label": "从在线服务转到训练资源",
          "narration": "这些算力和显存的安排属于 AI Infra，也就是 AI 基础设施，模型上线之前的训练同样需要它分配设备。",
          "focus": [
            "$ .concept-copy p"
          ],
          "id": "S02.9",
          "frame": 2,
          "estimatedSeconds": 14
        },
        {
          "label": "上传完整差旅手册",
          "narration": "假设现在要上传整本差旅手册，同一个问题会牵涉三类工作。",
          "phase": [
            0,
            900
          ],
          "id": "S02.3",
          "estimatedSeconds": 8
        },
        {
          "label": "显示应用侧的交付",
          "narration": "应用要显示上传进度，并在答完后给出引用。",
          "phase": [
            900,
            1190
          ],
          "id": "S02.10",
          "frame": 3,
          "estimatedSeconds": 6
        },
        {
          "label": "显示算法侧的检验",
          "narration": "算法团队要检查模型能不能从更长的文档里找准第四条。",
          "phase": [
            1190,
            1500
          ],
          "id": "S02.11",
          "frame": 3,
          "estimatedSeconds": 8
        },
        {
          "label": "显示基础设施侧的测量",
          "narration": "基础设施团队会增加输入长度，看看显存多用了多少，用户又多等了多久。",
          "phase": [
            1500,
            1810
          ],
          "id": "S02.12",
          "frame": 3,
          "estimatedSeconds": 10
        }
      ],
      "estimatedSeconds": 111,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S03",
      "chapter": 1,
      "title": "AI Infra 技术全景图",
      "subtitle": "按硬件、计算、模型和服务整理常见工具",
      "kind": "map",
      "targetSeconds": 60,
      "terms": [
        "GPU",
        "CUDA",
        "PyTorch",
        "vLLM",
        "Docker",
        "Kubernetes",
        "Ray"
      ],
      "sources": [
        "cuda",
        "pytorch",
        "vllm",
        "ray",
        "k8s"
      ],
      "steps": [
        {
          "label": "展开最下方的硬件层",
          "narration": "图的最下方是硬件，模型需要设备来计算、存数据，也要靠互联交换数据。",
          "id": "S03.0",
          "estimatedSeconds": 10
        },
        {
          "label": "辨认 CPU、GPU 和 NPU",
          "narration": "左边的 CPU 和 GPU 都能做计算，NPU 则是为神经网络计算设计的一类处理器。",
          "focus": [
            "CPU",
            "GPU",
            "NPU"
          ],
          "id": "S03.4",
          "frame": 0,
          "estimatedSeconds": 11
        },
        {
          "label": "辨认显存和互联",
          "narration": "HBM 是高带宽存储器，常用来给高性能加速器供数据，设备之间还要靠网络或高速互联来传数据。",
          "focus": [
            "HBM",
            "设备互联 / 网络"
          ],
          "id": "S03.5",
          "frame": 0,
          "estimatedSeconds": 12
        },
        {
          "label": "点亮计算软件层",
          "narration": "硬件上面是计算软件，这一层负责把工作交给设备执行。",
          "id": "S03.1",
          "estimatedSeconds": 8
        },
        {
          "label": "定位 CUDA 和 Triton",
          "narration": "CUDA 提供 NVIDIA GPU 的并行计算平台和编程模型，Triton 可以用来编写 GPU 计算内核。",
          "focus": [
            "CUDA",
            "Triton"
          ],
          "id": "S03.6",
          "frame": 1,
          "estimatedSeconds": 12
        },
        {
          "label": "定位现成的计算库",
          "narration": "开发者还可以调用计算库里现成的程序，比如 cuBLAS 里的矩阵运算。",
          "focus": [
            "cuBLAS",
            "cuDNN"
          ],
          "id": "S03.7",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "点亮模型执行层",
          "narration": "再往上是模型执行，PyTorch 常用来搭建和训练模型。",
          "id": "S03.2",
          "estimatedSeconds": 7
        },
        {
          "label": "区分训练与推理工具",
          "narration": "DeepSpeed 和 Megatron-LM 帮助完成大规模训练，vLLM 等工具则用来运行和服务已经训好的模型。",
          "focus": [
            "DeepSpeed · Megatron-LM",
            "vLLM · SGLang",
            "TensorRT-LLM"
          ],
          "id": "S03.8",
          "frame": 2,
          "estimatedSeconds": 12
        },
        {
          "label": "展开服务和应用两层",
          "narration": "服务平台把程序部署到机器上，分配资源并维持运行。",
          "id": "S03.3",
          "estimatedSeconds": 7
        },
        {
          "label": "沿接入处找到用户应用",
          "narration": "用户接触的是顶上的应用，比如聊天助手，它通过接口调用下面的模型服务。",
          "focus": [
            "聊天助手",
            "AI Agent",
            "API / 请求接入"
          ],
          "id": "S03.9",
          "frame": 3,
          "estimatedSeconds": 10
        }
      ],
      "estimatedSeconds": 98,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S04",
      "chapter": 2,
      "title": "为什么深度学习常用 GPU",
      "subtitle": "矩阵和张量运算包含大量可并行的计算",
      "kind": "parallel",
      "targetSeconds": 70,
      "terms": [
        "CPU",
        "GPU",
        "Parallel Computing",
        "Tensor Core"
      ],
      "sources": [
        "cuda_legacy",
        "cuda"
      ],
      "steps": [
        {
          "label": "显示六个输入和两条 CPU 通道",
          "narration": "这里有六个数要分别乘以二，先假设 CPU 同一拍能接两份工作。",
          "phase": [
            0,
            210
          ],
          "id": "S04.0",
          "estimatedSeconds": 9
        },
        {
          "label": "第一批写回四和十八",
          "narration": "二和九先送下来，算完把四和十八写到输出里。",
          "phase": [
            210,
            2180
          ],
          "id": "S04.4",
          "frame": 0,
          "estimatedSeconds": 7
        },
        {
          "label": "后两批依次通过",
          "narration": "两条通道腾出来以后，剩下的四个数分两批计算。",
          "phase": [
            2180,
            5940
          ],
          "id": "S04.5",
          "frame": 0,
          "estimatedSeconds": 7
        },
        {
          "label": "对照示意通道和实际 CPU 并行",
          "narration": "实际 CPU 可以用多个核心和向量指令同时算更多位置，这里只留两条通道方便观察。",
          "focus": [
            "CPU 通道"
          ],
          "id": "S04.6",
          "frame": 0,
          "estimatedSeconds": 11
        },
        {
          "label": "让六个 GPU 线程同时开始",
          "narration": "换成 GPU，图里的六个位置可以一次交给六个示意线程。",
          "phase": [
            0,
            1220
          ],
          "id": "S04.1",
          "estimatedSeconds": 8
        },
        {
          "label": "线程把结果写回各自的位置",
          "narration": "每个线程把自己的数乘以二，比如第三个线程把六变成十二，再写回第三列。",
          "phase": [
            1220,
            2190
          ],
          "id": "S04.7",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "标出左上角所需的行和列",
          "narration": "矩阵乘法也能分工，比如左上角只需要 A 的第一行和 B 的第一列。",
          "phase": [
            0,
            770
          ],
          "id": "S04.2",
          "estimatedSeconds": 10
        },
        {
          "label": "写出相乘相加的结果",
          "narration": "把一乘二和二乘一相加得到四，其他格子各用对应的行和列，也可以同时算。",
          "phase": [
            770,
            1030
          ],
          "id": "S04.8",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "指出 Tensor Core 的适用范围",
          "narration": "部分 GPU 还有 Tensor Core，可以加速它所支持的矩阵形状和数值格式。",
          "focus": [
            "Tensor Core 可加速支持的矩阵形状和数值格式。"
          ],
          "id": "S04.9",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "突出 CPU 接收和准备数据",
          "narration": "回到聊天服务，问题通常先到 CPU 侧，由服务程序准备模型要用的输入。",
          "focus": [
            "客户端",
            "CPU",
            "接收请求、准备数据"
          ],
          "id": "S04.3",
          "estimatedSeconds": 10
        },
        {
          "label": "跟踪 GPU 的计算和回传",
          "narration": "GPU 接过数据做并行计算，再沿绿色路径把结果交回去。",
          "phase": [
            0,
            4390
          ],
          "id": "S04.10",
          "frame": 3,
          "estimatedSeconds": 8
        },
        {
          "label": "比较准备、传输和计算的开销",
          "narration": "如果任务很小，准备和传输花的时间也可能占很大一部分。",
          "focus": [
            "准备、传输和计算都耗时。"
          ],
          "id": "S04.11",
          "frame": 3,
          "estimatedSeconds": 8
        }
      ],
      "estimatedSeconds": 108,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S05",
      "chapter": 2,
      "title": "显存容量与带宽",
      "subtitle": "模型运行需要显存空间，计算单元也需要及时读到数据",
      "kind": "memory",
      "targetSeconds": 75,
      "terms": [
        "VRAM",
        "HBM",
        "Memory Bandwidth",
        "OOM",
        "KV Cache"
      ],
      "sources": [
        "cuda",
        "cache"
      ],
      "steps": [
        {
          "label": "把模型权重装进显存",
          "narration": "GPU 开始计算前得先能访问权重，图里把它们载入了 GPU 的设备内存，也就是显存。",
          "id": "S05.0",
          "estimatedSeconds": 11
        },
        {
          "label": "观察剩余的显存格",
          "narration": "权重装进去以后，空着的格子还要留给模型运行时产生的数据。",
          "focus": [
            "$[data-occupied=\"false\"]"
          ],
          "id": "S05.4",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "加入缓存和临时空间",
          "narration": "接到更多请求或更长的输入时，缓存和运行用的临时数据会占掉更多显存。",
          "phase": [
            0,
            1430
          ],
          "id": "S05.1",
          "estimatedSeconds": 10
        },
        {
          "label": "超出容量的申请失败",
          "narration": "剩余空间放不下新申请的块时，就会出现 OOM，也就是内存不足。",
          "phase": [
            1430,
            2480
          ],
          "id": "S05.5",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "观察一个数据块过通道",
          "narration": "数据放得下也得读出来才能算，带宽说的就是单位时间能传多少数据。",
          "phase": [
            0,
            1440
          ],
          "id": "S05.2",
          "estimatedSeconds": 9
        },
        {
          "label": "算力闲置时仍在搬数据",
          "narration": "计算单元还有空闲，却得等显存把数据送过来。传得太慢，多加计算单元也未必能加快这一轮。",
          "phase": [
            1440,
            1820
          ],
          "id": "S05.6",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "对照容量不足时被拒绝的块",
          "narration": "如果卡在容量上，可以减少数据占用，或者把工作分给更多设备。",
          "focus": [
            "容量上限",
            "空间不足"
          ],
          "id": "S05.3",
          "estimatedSeconds": 9
        },
        {
          "label": "展示片内数据复用",
          "narration": "如果卡在数据传输上，可以让读进来的数据多用几次，少跑几趟显存。",
          "phase": [
            0,
            5100
          ],
          "focus": [
            "减少外部读取"
          ],
          "id": "S05.7",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 74,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S06",
      "chapter": 2,
      "title": "算子与 GPU 内核",
      "subtitle": "GPU 怎样执行矩阵乘法、加法和激活？",
      "kind": "operator",
      "targetSeconds": 65,
      "terms": [
        "Operator",
        "Kernel",
        "GEMM",
        "Kernel Fusion"
      ],
      "sources": [
        "pytorch",
        "cuda",
        "cublas"
      ],
      "steps": [
        {
          "label": "矩阵乘法得到负一",
          "narration": "这里把一行输入乘上一列权重，两项乘积相加得到负一。",
          "phase": [
            0,
            650
          ],
          "id": "S06.0",
          "estimatedSeconds": 8
        },
        {
          "label": "加上偏置得到负三",
          "narration": "加上负二这个偏置，结果变成负三。",
          "phase": [
            650,
            1080
          ],
          "id": "S06.4",
          "frame": 0,
          "estimatedSeconds": 5
        },
        {
          "label": "激活后得到零",
          "narration": "最后做 ReLU，负数被压到零。",
          "phase": [
            1080,
            1550
          ],
          "id": "S06.5",
          "frame": 0,
          "estimatedSeconds": 5
        },
        {
          "label": "辨认三个数学操作",
          "narration": "矩阵乘法、加偏置和激活函数都是算子，分别描述要做的数学操作。",
          "focus": [
            "矩阵乘法",
            "加偏置",
            "ReLU 激活"
          ],
          "id": "S06.6",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "跟踪内核的读取、计算和写回",
          "narration": "GPU 要执行这些算子，需要具体的程序，也就是内核，由它从显存读取数据、计算并写回结果。",
          "id": "S06.1",
          "estimatedSeconds": 12
        },
        {
          "label": "区分算子名称与内核的职责",
          "narration": "把这个程序用 CUDA 交给 NVIDIA GPU 执行，就可以称它为 CUDA Kernel。",
          "focus": [
            "内核从显存读取输入和权重，计算后把结果写回。"
          ],
          "id": "S06.7",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "查看乘法中间结果的往返",
          "narration": "三个算子分开执行时，乘法得到的负一先写回显存，加法再把它读出来。",
          "focus": [
            "−1 写回显存，再读出"
          ],
          "id": "S06.2",
          "estimatedSeconds": 9
        },
        {
          "label": "查看加法中间结果的往返",
          "narration": "加法得到的负三也要再写回一次，供后面的激活读取。",
          "focus": [
            "−3 写回显存，再读出"
          ],
          "id": "S06.8",
          "frame": 2,
          "estimatedSeconds": 7
        },
        {
          "label": "观察融合后的一次写回",
          "narration": "如果三步融合到同一个内核里，中间值可以留在里面，最后只把零写回去。",
          "phase": [
            0,
            2720
          ],
          "id": "S06.9",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "对照两条路径的相同输出",
          "narration": "两种做法都算出零，少搬两次中间结果的是下面那条融合路径。",
          "focus": [
            "0"
          ],
          "id": "S06.3",
          "estimatedSeconds": 8
        },
        {
          "label": "指出形状和硬件会影响实现",
          "narration": "即使是同一个算子，也可能有多种内核，哪一种合适要看输入形状和硬件。",
          "focus": [
            "两条执行路径都得到 0，具体实现还要看形状与硬件。"
          ],
          "id": "S06.10",
          "frame": 3,
          "estimatedSeconds": 10
        }
      ],
      "estimatedSeconds": 93,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S07",
      "chapter": 2,
      "title": "CUDA、Triton、PyTorch 与计算库",
      "subtitle": "用 CUDA C++ 和 Triton 给同两组数做逐项加法",
      "kind": "software",
      "targetSeconds": 120,
      "terms": [
        "CUDA",
        "Triton",
        "cuBLAS",
        "cuDNN",
        "PyTorch"
      ],
      "sources": [
        "cuda",
        "triton",
        "cublas",
        "cudnn",
        "cuda_vector_add",
        "triton_vector_add"
      ],
      "steps": [
        {
          "label": "对齐两排输入",
          "narration": "右边有两排数，每排六个，目标是把同一列的两个数相加。",
          "focus": [
            "A",
            "B"
          ],
          "id": "S07.0",
          "estimatedSeconds": 8
        },
        {
          "label": "框出第三列",
          "narration": "比如第三列的下标是二，这一列只需要把六和四加起来。",
          "focus": [
            "$[data-vector-column=\"2\"]",
            "6 + 4 = 10"
          ],
          "id": "S07.4",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "对应线程下标与数据列",
          "narration": "用 CUDA C++ 写时，每个线程先算出自己的下标，下标二的线程就负责第三列。",
          "phase": [
            0,
            460
          ],
          "focus": [
            "int i = blockDim.x * blockIdx.x",
            "+ threadIdx.x;",
            "$[data-vector-column=\"2\"]"
          ],
          "id": "S07.1",
          "estimatedSeconds": 11
        },
        {
          "label": "跟踪第三列写回",
          "narration": "这一行从第三列读出六和四，把十写回同一列，其他线程也这样处理各自的位置。",
          "phase": [
            460,
            1190
          ],
          "id": "S07.5",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "对照启动数和有效范围",
          "narration": "这里启动了三十二个线程，但条件判断只允许下标小于六的线程读写。",
          "focus": [
            "if (i < n) {",
            "add<<<1, 32>>>(A, B, C, 6);"
          ],
          "id": "S07.6",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "让 Triton 程序按四个位置分组",
          "narration": "Triton 的写法一次描述一组位置，第二组拿到的就是下标四、五、六、七。",
          "phase": [
            0,
            300
          ],
          "focus": [
            "start = K * tl.program_id(0)",
            "idx = start + tl.arange(0, K)",
            "程序 1"
          ],
          "id": "S07.2",
          "estimatedSeconds": 10
        },
        {
          "label": "把遮罩与越界列对应",
          "narration": "我们只有六项，代码里的 mask 会关掉下标六和七的读写。",
          "phase": [
            300,
            450
          ],
          "focus": [
            "valid = idx < n",
            "$[data-valid=\"false\"]"
          ],
          "id": "S07.7",
          "frame": 2,
          "estimatedSeconds": 8
        },
        {
          "label": "写回两组的有效结果",
          "narration": "最后写回的仍是这六列，空着的两列没有被写入。",
          "phase": [
            450,
            1110
          ],
          "id": "S07.8",
          "frame": 2,
          "estimatedSeconds": 7
        },
        {
          "label": "从显式内核切到框架算子",
          "narration": "用 PyTorch 做同样的加法，写一行 C 等于 A 加 B 就能调用框架提供的算子。",
          "phase": [
            0,
            900
          ],
          "focus": [
            "C = A + B"
          ],
          "id": "S07.3",
          "estimatedSeconds": 12
        },
        {
          "label": "对照六项结果",
          "narration": "右边的六个数跟前两种写法一样，具体怎样分工由框架调用的实现决定。",
          "focus": [
            "$[data-vector-result]"
          ],
          "id": "S07.9",
          "frame": 3,
          "estimatedSeconds": 9
        },
        {
          "label": "指出优化库与算子的对应关系",
          "narration": "遇到其他计算，框架也可以调用优化过的库，比如 cuBLAS 的矩阵乘法或 cuDNN 的卷积。",
          "focus": [
            "$ .foundation-note"
          ],
          "id": "S07.10",
          "frame": 3,
          "estimatedSeconds": 11
        }
      ],
      "estimatedSeconds": 103,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S08",
      "chapter": 2,
      "title": "计算受限与访存受限",
      "subtitle": "FlashAttention 怎样减少中间数据搬运",
      "kind": "bottleneck",
      "targetSeconds": 75,
      "terms": [
        "Compute-bound",
        "Memory-bound",
        "FlashAttention",
        "Attention"
      ],
      "sources": [
        "flash",
        "cuda"
      ],
      "steps": [
        {
          "label": "展示计算队列积压",
          "narration": "左边的数据已经就位，右边的计算单元却一直忙不过来，这就叫计算受限。",
          "id": "S08.0",
          "estimatedSeconds": 10
        },
        {
          "label": "指出计算侧的优化位置",
          "narration": "这时可以减少运算开销，或者增加可用算力。",
          "focus": [
            "计算"
          ],
          "id": "S08.4",
          "frame": 0,
          "estimatedSeconds": 6
        },
        {
          "label": "展示计算单元等待数据",
          "narration": "访存受限时，计算单元还有余力，却得等左边的数据读进来。",
          "id": "S08.1",
          "estimatedSeconds": 8
        },
        {
          "label": "指出搬运侧的优化位置",
          "narration": "可以减少往显存的读写，或者让已经读来的数据多用几次。",
          "focus": [
            "HBM"
          ],
          "id": "S08.5",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "跟踪注意力中间结果写回再读出",
          "narration": "拿注意力计算举例，上面这条路径把一大块中间结果写回 HBM，下一步再读出来。",
          "id": "S08.2",
          "estimatedSeconds": 11
        },
        {
          "label": "指出中间结果的搬运代价",
          "narration": "这个结果越大，两趟要搬的数据就越多。",
          "focus": [
            "大中间结果写回，再读出"
          ],
          "id": "S08.6",
          "frame": 2,
          "estimatedSeconds": 6
        },
        {
          "label": "展开 FlashAttention 的片上路径",
          "narration": "FlashAttention 把数据分块读入，让一部分计算留在片上，省下大块中间结果的读写。",
          "id": "S08.3",
          "estimatedSeconds": 10
        },
        {
          "label": "对照相同的注意力运算",
          "narration": "它仍然计算精确的注意力，浮点舍入和实际耗时会随输入、硬件和实现变化。",
          "focus": [
            "精确 Attention · 改变读写与执行顺序"
          ],
          "id": "S08.7",
          "frame": 3,
          "estimatedSeconds": 10
        }
      ],
      "estimatedSeconds": 69,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S09",
      "chapter": 3,
      "title": "模型参数怎样得到",
      "subtitle": "训练用数据更新参数，线上推理通常固定权重",
      "kind": "training",
      "targetSeconds": 60,
      "terms": [
        "Training",
        "Inference",
        "LLM",
        "Transformer"
      ],
      "sources": [
        "pytorch",
        "attention"
      ],
      "steps": [
        {
          "label": "给模型一个带答案的训练样本",
          "narration": "先给模型一个练习，输入是“天气很”，样本里的下一个词是“晴”。",
          "phase": [
            0,
            360
          ],
          "id": "S09.0",
          "estimatedSeconds": 9
        },
        {
          "label": "对照预测与正确答案",
          "narration": "示例模型起初更偏向“冷”，正确答案“晴”的概率只有百分之三十。",
          "phase": [
            360,
            730
          ],
          "id": "S09.4",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "让梯度和优化器更新参数",
          "narration": "训练时先根据预测和目标计算损失，再求出梯度，让优化器据此更新参数。",
          "phase": [
            0,
            1200
          ],
          "id": "S09.1",
          "estimatedSeconds": 10
        },
        {
          "label": "重新预测同一个样本",
          "narration": "拿同一个样本再试一次，示例里“晴”的概率升到了百分之六十。",
          "phase": [
            1200,
            1890
          ],
          "id": "S09.5",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "突出本轮改变的参数",
          "narration": "模型反复用不同数据练习时，这些参数会继续更新，训练也要额外处理梯度和优化器状态。",
          "focus": [
            "示例参数 w₁：0.12 → 0.10"
          ],
          "id": "S09.6",
          "frame": 1,
          "estimatedSeconds": 11
        },
        {
          "label": "给训练好的模型一个新输入",
          "narration": "训练结束后，给模型一个新输入“今天很”，就可以让它做一次推理。",
          "phase": [
            0,
            560
          ],
          "id": "S09.2",
          "estimatedSeconds": 9
        },
        {
          "label": "看到输出并对照固定参数",
          "narration": "示例里模型接了一个“暖”字，用的仍是训练得到的那份参数。",
          "phase": [
            560,
            880
          ],
          "id": "S09.7",
          "frame": 2,
          "estimatedSeconds": 8
        },
        {
          "label": "核对前后两边的参数值",
          "narration": "聊天请求也是这样，普通在线推理会用已有的权重和上下文继续生成。",
          "focus": [
            "同一个 w₁ = 0.10"
          ],
          "id": "S09.8",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "标出大语言模型",
          "narration": "真实的语言模型会预测 Token，LLM 指的是其中的大语言模型。",
          "focus": [
            "LLM：大语言模型"
          ],
          "id": "S09.3",
          "estimatedSeconds": 9
        },
        {
          "label": "标出常见模型架构",
          "narration": "许多大语言模型采用 Transformer 架构，后面会用因果 Transformer 演示逐个生成 Token。",
          "focus": [
            "Transformer：常用架构"
          ],
          "id": "S09.9",
          "frame": 3,
          "estimatedSeconds": 10
        }
      ],
      "estimatedSeconds": 93,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S10",
      "chapter": 3,
      "title": "PyTorch 怎样执行模型",
      "subtitle": "张量运算、前向计算与自动求导",
      "kind": "pytorch",
      "targetSeconds": 55,
      "terms": [
        "PyTorch",
        "Tensor",
        "Autograd",
        "Training",
        "Inference"
      ],
      "sources": [
        "pytorch",
        "pytorch_autograd"
      ],
      "steps": [
        {
          "label": "显示输入张量",
          "narration": "PyTorch 用张量装这些数。先看输入 x。",
          "focus": [
            "x = torch.tensor([2., 1.])",
            "x = [2, 1]"
          ],
          "id": "S10.0",
          "estimatedSeconds": 4
        },
        {
          "label": "显示参数张量",
          "narration": "模型参数放在另一个张量 w 里。",
          "focus": [
            "w = torch.tensor([1., -3.], requires_grad=True)",
            "w = [1, −3]"
          ],
          "id": "S10.4",
          "frame": 0,
          "estimatedSeconds": 3
        },
        {
          "label": "计算前向输出",
          "narration": "执行这一行，输入和参数对应相乘，再把结果相加，得到负一。",
          "id": "S10.1",
          "estimatedSeconds": 7
        },
        {
          "label": "定位前向计算的代码行",
          "narration": "这一行就是前向计算。大模型把许多这样的张量运算接在一起。",
          "focus": [
            "y = x @ w"
          ],
          "id": "S10.5",
          "frame": 1,
          "estimatedSeconds": 6
        },
        {
          "label": "把前向结果交给损失函数",
          "narration": "训练时，用预测和目标算损失。",
          "phase": [
            0,
            1250
          ],
          "id": "S10.2",
          "estimatedSeconds": 4
        },
        {
          "label": "调用自动求导",
          "narration": "调用 backward，PyTorch 就会自动求出梯度。",
          "phase": [
            1250,
            2200
          ],
          "id": "S10.6",
          "frame": 2,
          "estimatedSeconds": 5
        },
        {
          "label": "根据梯度更新参数",
          "narration": "更新参数时，直接用刚求出的梯度。",
          "phase": [
            2200,
            3150
          ],
          "id": "S10.7",
          "frame": 2,
          "estimatedSeconds": 4
        },
        {
          "label": "指出优化器负责更新",
          "narration": "实际训练通常由优化器执行这一步。",
          "focus": [
            "$ .foundation-note"
          ],
          "id": "S10.8",
          "frame": 2,
          "estimatedSeconds": 4
        },
        {
          "label": "推理只需前向计算",
          "narration": "在线推理用训好的参数做前向计算。",
          "focus": [
            "y = x @ w",
            "2 × 1 + 1 × (−3) = −1"
          ],
          "id": "S10.3",
          "estimatedSeconds": 4
        },
        {
          "label": "从模型调用转向服务",
          "narration": "当很多人一起提问，还要有人决定下一次前向该算哪些输入。",
          "focus": [
            "服务还要接收请求、安排执行、保留缓存。"
          ],
          "id": "S10.9",
          "frame": 3,
          "estimatedSeconds": 6
        }
      ],
      "estimatedSeconds": 47,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S11",
      "chapter": 3,
      "title": "多卡训练怎样分工",
      "subtitle": "数据并行、张量并行和流水线并行",
      "kind": "distributed",
      "targetSeconds": 65,
      "terms": [
        "DP",
        "TP",
        "PP",
        "DeepSpeed",
        "Megatron-LM"
      ],
      "sources": [
        "distributed",
        "fsdp"
      ],
      "steps": [
        {
          "label": "区分单卡的容量和训练速度",
          "narration": "训练要用多张卡，通常是因为一张卡装不下模型和训练状态，或者虽然装得下，处理数据却太慢。",
          "id": "S11.0",
          "estimatedSeconds": 10
        },
        {
          "label": "根据限制选择分工",
          "narration": "装得下的时候，可以让不同 GPU 同时处理不同的数据。",
          "focus": [
            "装得下，训练仍可能太慢"
          ],
          "id": "S11.4",
          "frame": 0,
          "estimatedSeconds": 5
        },
        {
          "label": "各卡拿到完整模型和不同数据",
          "narration": "这叫数据并行。图里两张 GPU 各保留一套完整模型，分别处理一批数据。",
          "phase": [
            0,
            2780
          ],
          "focus": [
            "完整模型副本"
          ],
          "id": "S11.1",
          "estimatedSeconds": 8
        },
        {
          "label": "跟踪两卡同步梯度",
          "narration": "两张卡算完梯度后再同步并更新参数，这样才能让副本保持一致。",
          "phase": [
            2780,
            5860
          ],
          "focus": [
            "同步梯度"
          ],
          "id": "S11.5",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "单卡装不下时拆分一层",
          "narration": "如果连模型都装不下，可以把一层的参数和计算拆给多张卡，这叫张量并行。",
          "focus": [
            "同一层的张量分片",
            "GPU 0",
            "GPU 1"
          ],
          "id": "S11.2",
          "estimatedSeconds": 9
        },
        {
          "label": "跟踪部分结果的交换",
          "narration": "算完后还要交换需要的结果，这就是高速互联会影响执行时间的地方。",
          "phase": [
            0,
            5000
          ],
          "focus": [
            "交换部分结果"
          ],
          "id": "S11.6",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "定位前半与后半模型阶段",
          "narration": "流水线并行把模型按阶段拆开，第一张卡跑前半段，第二张跑后半段。",
          "focus": [
            "模型前半阶段",
            "模型后半阶段"
          ],
          "id": "S11.3",
          "estimatedSeconds": 9,
          "phase": [
            0,
            0
          ]
        },
        {
          "label": "推进微批次并展示训练状态分片",
          "narration": "第一张卡交出一个微批次，就能接着算下一个。显存吃紧时，像 FSDP 这样的办法还可以把参数、梯度和优化器状态分到不同卡上。",
          "phase": [
            0,
            7450
          ],
          "id": "S11.7",
          "frame": 3,
          "estimatedSeconds": 13
        }
      ],
      "estimatedSeconds": 72,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S12",
      "chapter": 4,
      "title": "推理框架解决什么问题",
      "subtitle": "多个请求如何共享 GPU 和显存？",
      "kind": "engines",
      "targetSeconds": 65,
      "terms": [
        "Inference Engine",
        "vLLM",
        "SGLang",
        "TensorRT-LLM",
        "Model Serving"
      ],
      "sources": [
        "vllm",
        "sglang",
        "trt"
      ],
      "steps": [
        {
          "label": "定位三条长度不同的输入",
          "narration": "模型刚训好，三个用户就来提问了。有人只发一句话，有人附了一整篇文章。",
          "focus": [
            "什么是人工智能？",
            "总结这篇文章 ＋ 附文",
            "推荐一道晚餐"
          ],
          "id": "S12.0",
          "estimatedSeconds": 8,
          "phase": [
            0,
            420
          ]
        },
        {
          "label": "区分等待处理和正在生成",
          "narration": "调用一次模型只能完成当轮计算。服务还得决定谁先算，谁得等，以及下一轮接着处理谁。",
          "phase": [
            420,
            2000
          ],
          "id": "S12.4",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "展示各请求的输入缓存",
          "narration": "推理引擎会为正在执行的请求保留各自的状态，下一轮才能沿着各自的上下文继续生成。",
          "id": "S12.1",
          "estimatedSeconds": 9
        },
        {
          "label": "对照长文和短问题的输入长度",
          "narration": "附了文章的 B 输入更长，要给它留的缓存空间也更大。",
          "focus": [
            "输入 5 个 Token",
            "输入 28 个 Token"
          ],
          "id": "S12.5",
          "frame": 1,
          "estimatedSeconds": 6
        },
        {
          "label": "展示 vLLM 与 SGLang",
          "narration": "vLLM 和 SGLang 都提供大模型推理与服务的能力。",
          "focus": [
            "vLLM",
            "SGLang"
          ],
          "id": "S12.2",
          "estimatedSeconds": 7
        },
        {
          "label": "定位 NVIDIA 的推理工具",
          "narration": "TensorRT-LLM 是 NVIDIA 的大模型推理优化工具体系，选工具时要核对模型、设备和需要的功能。",
          "focus": [
            "TensorRT-LLM"
          ],
          "id": "S12.6",
          "frame": 2,
          "estimatedSeconds": 12
        },
        {
          "label": "把组批、缓存和模型调用连起来",
          "narration": "这就是推理引擎在模型外面做的事。它挑选本轮要算的请求，找出各自的缓存，再调用模型。",
          "focus": [
            "每轮挑选请求 → 保留各自的 KV → 调用模型计算"
          ],
          "id": "S12.3",
          "estimatedSeconds": 9
        },
        {
          "label": "从职责转向单条请求",
          "narration": "接下来跟着 A 走一遍，看看它是在哪一步等，又是在哪一步开始算的。",
          "focus": [
            "什么是人工智能？"
          ],
          "id": "S12.7",
          "frame": 3,
          "estimatedSeconds": 7
        }
      ],
      "estimatedSeconds": 67,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S13",
      "chapter": 4,
      "title": "推理请求的执行流程",
      "subtitle": "API Server → Scheduler → Worker",
      "kind": "components",
      "targetSeconds": 65,
      "terms": [
        "API Server",
        "Scheduler",
        "Worker",
        "Inference Engine"
      ],
      "sources": [
        "vllm"
      ],
      "steps": [
        {
          "label": "跟踪聊天问题进入 API",
          "narration": "用户点下发送，请求 A 带着开头那句“什么是人工智能”到达服务接口。",
          "phase": [
            0,
            830
          ],
          "id": "S13.0",
          "estimatedSeconds": 10
        },
        {
          "label": "确认输入检查",
          "narration": "API Server 检查输入和参数，通过以后再把请求交给执行系统。",
          "phase": [
            830,
            1140
          ],
          "id": "S13.4",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "在队列里找到 A 和 B",
          "narration": "GPU 还忙着，所以 A 暂时和 B 一起留在等待队列里。",
          "focus": [
            "等待队列",
            "A",
            "B"
          ],
          "id": "S13.1",
          "estimatedSeconds": 9
        },
        {
          "label": "定位做准入决定的调度器",
          "narration": "到调度器这里，请求只是入了队。等这一轮有计算和缓存预算，A 才能被选中。",
          "focus": [
            "Scheduler"
          ],
          "id": "S13.5",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "把 A 从队列交给 Worker",
          "narration": "轮到 A 时，调度器把它移出队列，交给 Worker 调用 GPU。",
          "phase": [
            0,
            1910
          ],
          "id": "S13.2",
          "estimatedSeconds": 9
        },
        {
          "label": "沿 A 的执行路径找到缓存",
          "narration": "Worker 调用 GPU 执行模型，A 在这轮留下的缓存会交给自己的下一轮。",
          "focus": [
            "KV Cache",
            "使用请求自己的缓存"
          ],
          "id": "S13.6",
          "frame": 2,
          "estimatedSeconds": 8
        },
        {
          "label": "沿返回路径把输出送回聊天窗口",
          "narration": "模型算出一段文字后，服务接口就沿着绿色路径把它传回原来的聊天窗口。",
          "phase": [
            0,
            1530
          ],
          "id": "S13.3",
          "estimatedSeconds": 10
        },
        {
          "label": "定位聊天窗口的首段回答",
          "narration": "窗口里现在出现的是回答的开头，模型接下来会继续生成。",
          "phase": [
            1530,
            1760
          ],
          "id": "S13.7",
          "frame": 3,
          "estimatedSeconds": 8
        }
      ],
      "estimatedSeconds": 71,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S14",
      "chapter": 4,
      "title": "分词、嵌入与注意力",
      "subtitle": "Token 是离散单位，Attention 组合上下文",
      "kind": "tokens",
      "targetSeconds": 70,
      "terms": [
        "Token",
        "Tokenization",
        "Embedding",
        "Attention",
        "Key",
        "Value"
      ],
      "sources": [
        "attention",
        "cache"
      ],
      "steps": [
        {
          "label": "把输入切成 Token",
          "narration": "还是开头那句“什么是人工智能”，分词器先把它切成几个片段。",
          "phase": [
            0,
            650
          ],
          "id": "S14.0",
          "estimatedSeconds": 9
        },
        {
          "label": "从词表查出片段编号",
          "narration": "分词器再给每个片段查一个编号，图里“人工”的 Token ID 是一百零六。",
          "phase": [
            650,
            1140
          ],
          "id": "S14.4",
          "frame": 0,
          "estimatedSeconds": 10
        },
        {
          "label": "对应示意 Token 与 ID",
          "narration": "这里的切法和编号都是示意，换个分词器，片段的边界和编号都可能变。",
          "focus": [
            "$[data-token-position=\"2\"]",
            "106"
          ],
          "id": "S14.5",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "从 ID 查到嵌入向量",
          "narration": "接着做嵌入，也就是按每个 Token ID 查出一组数。",
          "phase": [
            0,
            960
          ],
          "id": "S14.1",
          "estimatedSeconds": 8
        },
        {
          "label": "对照一百零六与示例向量",
          "narration": "比如一百零六查出来是零点六和零点三，实际模型的向量通常比这长得多。",
          "focus": [
            "106",
            "[0.6, 0.3]"
          ],
          "id": "S14.6",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "让当前位置的 Q 连向各位置的 K",
          "narration": "现在处理“智能”，它的 Q 会与自己和前面位置的 K 比较。",
          "phase": [
            850,
            2090
          ],
          "id": "S14.2",
          "estimatedSeconds": 9
        },
        {
          "label": "揭示各位置的注意力权重",
          "narration": "比较结果用来计算注意力权重，比如图里“人工”这一列占百分之五十。",
          "phase": [
            2090,
            3450
          ],
          "id": "S14.7",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "用权重组合各位置的 V",
          "narration": "模型用这些权重组合各位置的 V，得到“智能”所在位置的新结果。",
          "phase": [
            4650,
            6210
          ],
          "id": "S14.8",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "遮住未来的问号",
          "narration": "“智能”右边的问号在未来位置，因果遮罩挡住它，当前计算就用不到这一列。",
          "phase": [
            850,
            1630
          ],
          "id": "S14.3",
          "estimatedSeconds": 10
        },
        {
          "label": "检查当前位置仍在可见范围",
          "narration": "当前和更早的位置都可以参与计算，模型就靠已经出现的内容来预测下一个 Token。",
          "focus": [
            "当前 Q",
            "K4"
          ],
          "id": "S14.9",
          "frame": 3,
          "estimatedSeconds": 11
        }
      ],
      "estimatedSeconds": 94,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S15",
      "chapter": 4,
      "title": "Prefill 与 Decode",
      "subtitle": "模型怎样处理输入并逐个生成 Token？",
      "kind": "generation",
      "targetSeconds": 85,
      "terms": [
        "Prefill",
        "Decode",
        "Autoregressive Generation",
        "Streaming Output"
      ],
      "sources": [
        "cache",
        "vllm",
        "vllm_scheduler"
      ],
      "steps": [
        {
          "label": "显示五个输入片段和空白输出",
          "narration": "请求 A 的问题已经切成五个片段，模型还没有输出任何回答。",
          "focus": [
            "$[data-input-position]"
          ],
          "id": "S15.0",
          "estimatedSeconds": 9
        },
        {
          "label": "从输入序列聚焦到 Prefill",
          "narration": "模型要先处理整段已有输入，这一步叫 Prefill。",
          "focus": [
            "Prefill"
          ],
          "id": "S15.4",
          "frame": 0,
          "estimatedSeconds": 7
        },
        {
          "label": "五个输入位置送进模型",
          "narration": "Prefill 时，许多位置的计算可以并行进行，每个位置只访问因果关系允许的内容。",
          "phase": [
            0,
            770
          ],
          "id": "S15.1",
          "estimatedSeconds": 10
        },
        {
          "label": "在输入下方建立五份缓存",
          "narration": "五个位置处理完，下面留下了它们各自的 K 和 V。",
          "phase": [
            770,
            1030
          ],
          "id": "S15.5",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "显示第一个输出 Token",
          "narration": "模型从计算结果中采样出第一个输出，这次是“人工”。",
          "phase": [
            1030,
            1310
          ],
          "id": "S15.6",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "沿回路接入刚生成的片段",
          "narration": "接下来进入 Decode，模型把刚生成的“人工”当作下一轮的输入。",
          "phase": [
            0,
            660
          ],
          "id": "S15.2",
          "estimatedSeconds": 9
        },
        {
          "label": "追加这个位置的缓存",
          "narration": "这一轮会处理新位置，缓存里也就多了一份 K 和 V。",
          "phase": [
            660,
            960
          ],
          "id": "S15.7",
          "frame": 2,
          "estimatedSeconds": 8
        },
        {
          "label": "写出第二个 Token",
          "narration": "接着采样出下一个片段“智能”，同一条请求就这样按顺序往下生成。",
          "phase": [
            960,
            1280
          ],
          "id": "S15.8",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "聊天窗口收到第一段输出",
          "narration": "服务可以边算边送，这个聊天窗口先收到的是“人工智能”。",
          "phase": [
            0,
            1050
          ],
          "id": "S15.3",
          "estimatedSeconds": 8
        },
        {
          "label": "继续接回刚生成的 Token",
          "narration": "模型还在继续把刚生成的 Token 接回下一轮，每次都会把处理过的位置写进缓存。",
          "phase": [
            1050,
            7150
          ],
          "id": "S15.9",
          "frame": 3,
          "estimatedSeconds": 11
        },
        {
          "label": "聊天窗口收到下一段",
          "narration": "等“是”和“一类”都生成出来，服务可以把它们合在同一段发回去。",
          "phase": [
            7150,
            7700
          ],
          "id": "S15.10",
          "frame": 3,
          "estimatedSeconds": 9
        },
        {
          "id": "S15.11",
          "frame": 3,
          "label": "对照长输入 Prefill 的并行计算",
          "narration": "还记得算力和显存带宽吗？输入很长时，Prefill 可以让许多位置共用读进来的权重，同时做大量矩阵运算。",
          "estimatedSeconds": 12,
          "phase": [
            0,
            1550
          ]
        },
        {
          "id": "S15.12",
          "frame": 3,
          "label": "低并发 Decode 反复读权重和 KV",
          "narration": "并发低时，Decode 每条请求每轮通常只推进一个位置，权重和已有的 KV 却要反复读，速度就容易受显存带宽限制。",
          "estimatedSeconds": 12,
          "phase": [
            1550,
            3800
          ]
        },
        {
          "id": "S15.13",
          "frame": 3,
          "label": "连接输入长度和输出长度",
          "narration": "长输入会加重首字出现前的计算，长输出则需要更多轮 Decode，用户得等更久才能看完。",
          "estimatedSeconds": 9,
          "phase": [
            3800,
            4600
          ]
        }
      ],
      "estimatedSeconds": 129,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S16",
      "chapter": 4,
      "title": "KV Cache 怎样复用历史计算",
      "subtitle": "保存每层历史 Token 的 Key 与 Value",
      "kind": "cache",
      "targetSeconds": 85,
      "terms": [
        "KV Cache",
        "Key",
        "Value",
        "Attention"
      ],
      "sources": [
        "cache",
        "paged"
      ],
      "steps": [
        {
          "label": "辨认三份历史键值",
          "narration": "看这个 Transformer 层，前三个位置各自已经算出一份 K 和一份 V。",
          "focus": [
            "$[data-kv-action=\"stored\"]"
          ],
          "id": "S16.0",
          "estimatedSeconds": 10
        },
        {
          "label": "找到新的查询",
          "narration": "当第四个位置到来时，它带着自己的查询向量，也就是图里的 Q。",
          "focus": [
            "新位置的 Query"
          ],
          "id": "S16.4",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "重新计算历史位置",
          "narration": "如果每步都从头算，新的位置一到，前三个位置的 K 和 V 也要再算一遍。",
          "id": "S16.1",
          "estimatedSeconds": 11
        },
        {
          "label": "保留历史 K 和 V",
          "narration": "因果模型里的历史位置看不到后来的 Token，所以它们的 K 和 V 可以反复使用，这份缓存就叫 KV Cache。",
          "phase": [
            0,
            0
          ],
          "id": "S16.2",
          "estimatedSeconds": 15
        },
        {
          "label": "追加第四个位置的 K 和 V",
          "narration": "GPU 只需要为第四个位置计算新的 K 和 V，再把它们追加进去。",
          "phase": [
            0,
            1280
          ],
          "id": "S16.5",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "沿着连线读取历史缓存",
          "narration": "新位置用自己的 Q 和这些 K 算相关程度，再用得到的权重汇总 V。",
          "id": "S16.3",
          "estimatedSeconds": 11
        },
        {
          "label": "看到注意力的计算结果",
          "narration": "图右侧出现的就是当前位置的注意力结果。",
          "focus": [
            "注意力结果"
          ],
          "id": "S16.6",
          "frame": 3,
          "estimatedSeconds": 6
        },
        {
          "label": "指出缓存的显存代价",
          "narration": "缓存省下了历史位置的重算，每一步仍然要从显存读取这些数据。",
          "focus": [
            "省下重算；仍要从显存读取历史 K / V。"
          ],
          "id": "S16.7",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 81,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S17",
      "chapter": 4,
      "title": "KV Cache 占多少显存",
      "subtitle": "同一模型副本可共用权重，每个请求有自己的上下文",
      "kind": "cachegrow",
      "targetSeconds": 75,
      "terms": [
        "Context Length",
        "KV Cache",
        "OOM",
        "Concurrency"
      ],
      "sources": [
        "cache",
        "paged",
        "llama3"
      ],
      "steps": [
        {
          "label": "定位供多条请求使用的权重",
          "narration": "左边是一份共享的模型权重，普通推理时它通常保持固定。",
          "focus": [
            "共享权重"
          ],
          "id": "S17.0",
          "estimatedSeconds": 8
        },
        {
          "label": "在池里定位 A 的三格缓存",
          "narration": "右边的 A 已经处理了三个位置，在这十八格的缓存池里先占三格。",
          "focus": [
            "$[data-request=\"A\"][data-used]"
          ],
          "id": "S17.4",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "让 A 的历史从三格长到七格",
          "narration": "保留完整历史时，A 每处理一个新位置，缓存就多占一格，现在已经从三格长到了七格。",
          "phase": [
            0,
            1360
          ],
          "id": "S17.1",
          "estimatedSeconds": 11
        },
        {
          "label": "从格子对应到一个 Token 的缓存",
          "narration": "这里一格代表一个 Token 的缓存。等会儿换成一个真实模型，看看一格要用多少显存。",
          "focus": [
            "$ .inference-foot"
          ],
          "id": "S17.5",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "给 B 分配五格",
          "narration": "B 也进来了，它用同一份模型权重，自己的历史缓存占五格。",
          "phase": [
            0,
            795
          ],
          "id": "S17.2",
          "estimatedSeconds": 9
        },
        {
          "label": "给 C 分配四格并汇总",
          "narration": "C 再用掉四格，加上 A 和 B 的缓存，总共占了十六格。",
          "phase": [
            795,
            1100
          ],
          "id": "S17.6",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "突出三个请求的缓存占用",
          "narration": "估算容量时，要同时看有多少请求在跑，以及每条请求保留了多长的历史。",
          "focus": [
            "每个请求各自保存历史",
            "合计 16 / 18 个位置"
          ],
          "id": "S17.7",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "让请求 D 留在队列",
          "narration": "D 需要三格，池里只剩两格，所以这条新请求先留在队列里。",
          "id": "S17.3",
          "estimatedSeconds": 9
        },
        {
          "label": "定位缓存容量的约束",
          "narration": "调度器得在预算内安排计算，等已有缓存释放或调整后，才有机会接进 D。",
          "focus": [
            "D 需要 3 格，池里只剩 2 格 → 等待"
          ],
          "id": "S17.8",
          "frame": 3,
          "estimatedSeconds": 10
        },
        {
          "id": "S17.9",
          "frame": 3,
          "label": "按真实模型配置估算每个 Token 的 KV",
          "narration": "用 Llama 3.1 8B 举例。每层有八个 KV 头，每头存一百二十八个数，K 和 V 都要存。三十二层用每个数两字节的 BF16，算下来，每个 Token 要一百二十八 KiB。",
          "estimatedSeconds": 19,
          "phase": [
            0,
            600
          ]
        },
        {
          "id": "S17.10",
          "frame": 3,
          "label": "让单条对话从 1024 增长到 8192 个 Token",
          "narration": "一条对话如果已经缓存了一千零二十四个 Token，就占一百二十八 MiB。留到八千一百九十二个 Token，就要一 GiB。",
          "estimatedSeconds": 13,
          "phase": [
            600,
            2000
          ]
        },
        {
          "id": "S17.11",
          "frame": 3,
          "label": "让 12 条长对话同时占用缓存",
          "narration": "这样的长对话如果有十二条同时在跑，光各自的 KV 就要十二 GiB，模型权重和临时数据还得另留空间。",
          "estimatedSeconds": 12,
          "phase": [
            2000,
            3650
          ]
        }
      ],
      "estimatedSeconds": 127,
      "transition": "读完后按 Space，进入下一页第一句。",
      "demo": {
        "model": "Llama 3.1 8B",
        "layers": 32,
        "kvHeads": 8,
        "headDimension": 128,
        "bytesPerElement": 2,
        "shortTokens": 1024,
        "longTokens": 8192,
        "longRequests": 12
      }
    },
    {
      "id": "S18",
      "chapter": 4,
      "title": "PagedAttention 怎样管理缓存",
      "subtitle": "映射表让一个请求的 KV Cache 可以分散存放",
      "kind": "paged",
      "targetSeconds": 75,
      "terms": [
        "PagedAttention",
        "KV Block",
        "Logical Block",
        "Physical Block"
      ],
      "sources": [
        "paged"
      ],
      "steps": [
        {
          "label": "标出三段连续预留空间",
          "narration": "先试一种简单的分法，每个请求进来，就给它预留一大段连续空间。",
          "focus": [
            "连续预留",
            "A",
            "B",
            "C"
          ],
          "id": "S18.0",
          "estimatedSeconds": 9
        },
        {
          "label": "指出预留段里闲着的部分",
          "narration": "回答有多长要生成完才知道，空间留多了，灰色的格子就会闲在那里。",
          "focus": [
            "灰色空位已属于当前请求"
          ],
          "id": "S18.4",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "让请求 D 等待空间",
          "narration": "D 也到了，可那些还空着的格子都已经划给了别的请求，D 暂时用不上。",
          "focus": [
            "$[data-status=\"waiting\"]"
          ],
          "id": "S18.1",
          "estimatedSeconds": 10
        },
        {
          "label": "突出一段预留区内的空位",
          "narration": "比如 B 这一行明明还有空格，如果按需分配，D 就有机会用上散在各处的空闲块。",
          "focus": [
            "$[data-reserved-owner=\"B\"][data-used=\"false\"]"
          ],
          "id": "S18.5",
          "frame": 1,
          "estimatedSeconds": 11
        },
        {
          "label": "建立两个逻辑块和物理块的映射",
          "narration": "PagedAttention 把 KV Cache 按块管理，每个逻辑块能保存固定数量的 Token 位置。",
          "id": "S18.2",
          "estimatedSeconds": 10
        },
        {
          "label": "同时标出不相邻的 P2 与 P5",
          "narration": "A 的逻辑块零和一分别存进物理块二和五，块表记着它们的位置，中间不用为 A 留空。",
          "focus": [
            "L0 → P2",
            "L1 → P5",
            "$[data-physical-block=\"2\"]",
            "$[data-physical-block=\"5\"]"
          ],
          "id": "S18.6",
          "frame": 2,
          "estimatedSeconds": 12
        },
        {
          "label": "把新增的 L2 映射到 P1",
          "narration": "A 的序列继续增长时，第三个逻辑块可以放进空闲的一号物理块。",
          "focus": [
            "L2 → P1",
            "$[data-physical-block=\"1\"]"
          ],
          "id": "S18.3",
          "estimatedSeconds": 9
        },
        {
          "label": "沿逻辑顺序读取物理块",
          "narration": "做注意力计算时，程序查块表，按二号、五号、一号的顺序去取数据。",
          "phase": [
            0,
            5750
          ],
          "id": "S18.7",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 79,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S19",
      "chapter": 4,
      "title": "一个请求怎样申请与释放缓存",
      "subtitle": "序列增长时，按需申请物理块",
      "kind": "allocate",
      "targetSeconds": 85,
      "terms": [
        "PagedAttention",
        "Block Table",
        "KV Cache"
      ],
      "sources": [
        "paged"
      ],
      "steps": [
        {
          "label": "让 A 从共享池领取缓存块",
          "narration": "请求 A 刚进来时，只领够用的块。",
          "id": "S19.0",
          "estimatedSeconds": 4
        },
        {
          "label": "观察 A 尚有空余的缓存块",
          "narration": "后续 Token 先填进这一块，填满了才需要再申请。",
          "focus": [
            "$[data-physical-block=\"2\"]"
          ],
          "id": "S19.4",
          "frame": 0,
          "estimatedSeconds": 6
        },
        {
          "label": "为增长中的 A 再分一块",
          "narration": "A 的历史长了，池子再给它一块空闲空间。",
          "id": "S19.1",
          "estimatedSeconds": 5
        },
        {
          "label": "观察池中尚未分配的块",
          "narration": "其余空闲块还能留给别的请求。",
          "focus": [
            "$[data-physical-block][data-free=\"true\"]"
          ],
          "id": "S19.5",
          "frame": 1,
          "estimatedSeconds": 4
        },
        {
          "label": "让 B 向同一个池子申请",
          "narration": "B 进来时，就从这批空闲块里领一块。",
          "id": "S19.2",
          "estimatedSeconds": 5
        },
        {
          "label": "查看 A 与 B 的独立分配",
          "narration": "池子是共享的，A 和 B 各用自己领到的块。",
          "focus": [
            "$[data-physical-block][data-owner=\"B\"]"
          ],
          "id": "S19.6",
          "frame": 2,
          "estimatedSeconds": 5
        },
        {
          "label": "让 A 的两个块依次归还",
          "narration": "A 答完了。它的块如果没有其他引用，也无需保留，就会回到空闲池。",
          "phase": [
            0,
            3810
          ],
          "id": "S19.3",
          "estimatedSeconds": 9
        },
        {
          "label": "确认 B 仍然在执行",
          "narration": "B 还在生成，自己的块继续留着。",
          "focus": [
            "$[data-physical-block=\"1\"]"
          ],
          "id": "S19.7",
          "frame": 3,
          "estimatedSeconds": 4,
          "phase": [
            3810,
            3900
          ]
        },
        {
          "id": "S19.8",
          "frame": 3,
          "label": "让 C 复用 A 归还的块",
          "narration": "再来一条 C，就可以用刚从 A 手里收回的块。",
          "estimatedSeconds": 6,
          "phase": [
            3900,
            5150
          ]
        }
      ],
      "estimatedSeconds": 48,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S20",
      "chapter": 4,
      "title": "连续批处理怎样安排请求",
      "subtitle": "调度器可在每轮执行之间更新批次",
      "kind": "batch",
      "targetSeconds": 105,
      "terms": [
        "Batching",
        "Static Batching",
        "Continuous Batching",
        "Scheduler"
      ],
      "sources": [
        "orca",
        "vllm",
        "vllm_scheduler"
      ],
      "steps": [
        {
          "label": "对照两种批处理的 Decode 时间表",
          "narration": "A 还要生成两轮，B 要四轮。两种批处理都让它们先一起算。",
          "focus": [
            "固定批次",
            "连续批处理"
          ],
          "id": "S20.0",
          "estimatedSeconds": 7,
          "phase": [
            0,
            350
          ]
        },
        {
          "label": "让 C 到达两种批次的队列",
          "narration": "第一轮结束后，C 到了。固定批次要等 B 跑完第四轮，才能开始处理 C。",
          "id": "S20.4",
          "frame": 0,
          "estimatedSeconds": 8,
          "phase": [
            350,
            960
          ]
        },
        {
          "label": "连续批处理先安排 C 做 Prefill",
          "narration": "连续批处理可以在批次还没结束时安排新工作。这里预算够，调度器先让 C 做 Prefill，处理输入并建立自己的缓存。",
          "id": "S20.1",
          "estimatedSeconds": 12,
          "phase": [
            0,
            1750
          ]
        },
        {
          "label": "让完成 Prefill 的 C 加入第二轮 Decode",
          "narration": "C 的 Prefill 算出首个输出后，就赶上了图里的第二轮，和 A、B 一起做 Decode。上面那条 C 还在等。",
          "id": "S20.5",
          "frame": 1,
          "estimatedSeconds": 10,
          "phase": [
            1750,
            3600
          ]
        },
        {
          "label": "让完成的 A 退出",
          "narration": "第二轮结束，A 答完退出。第三轮只剩 B 和 C。",
          "id": "S20.2",
          "estimatedSeconds": 6
        },
        {
          "label": "观察第三轮仍在执行的两条请求",
          "narration": "引擎每轮都能重新组批，让还没答完的请求继续算。",
          "focus": [
            "$[data-live-status=\"running\"][data-live-request=\"B\"],[data-live-status=\"running\"][data-live-request=\"C\"]"
          ],
          "id": "S20.6",
          "frame": 2,
          "estimatedSeconds": 6
        },
        {
          "label": "对照 C 完成的 Decode 轮次",
          "narration": "这次 C 在第三轮就答完了。固定批次里，它要等到第五轮才开始 Decode，第六轮才答完。",
          "focus": [
            "C：第 6 轮完成",
            "C：第 3 轮完成"
          ],
          "id": "S20.3",
          "estimatedSeconds": 9
        },
        {
          "label": "定位组批的资源与延迟约束",
          "narration": "每轮接多少工作，要看剩余缓存、Token 预算和延迟目标。图里比的是执行顺序，每轮实际花的时间可能不同。",
          "focus": [
            "按显存、Token 预算与延迟目标组批"
          ],
          "id": "S20.7",
          "frame": 3,
          "estimatedSeconds": 11
        }
      ],
      "estimatedSeconds": 69,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S21",
      "chapter": 4,
      "title": "前缀缓存怎样命中",
      "subtitle": "Prefix Caching 允许多个请求复用相同前缀的 KV Cache",
      "kind": "prefix",
      "targetSeconds": 75,
      "terms": [
        "Prefix Caching",
        "KV Cache",
        "Prefill"
      ],
      "sources": [
        "prefix"
      ],
      "steps": [
        {
          "label": "对照报销和订票两条提问",
          "narration": "回到差旅手册，这一次 A 问何时报销，B 问怎么订票。",
          "focus": [
            "何时报销？",
            "怎么订票？"
          ],
          "id": "S21.0",
          "estimatedSeconds": 9
        },
        {
          "label": "标出两条输入共享的前缀",
          "narration": "两条问题前面都有同一句提示，“仅依据这份差旅手册回答”。",
          "focus": [
            "$[data-prefix-text]"
          ],
          "id": "S21.4",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "写入 A 的前缀缓存",
          "narration": "第一次处理 A 时，模型算出共同提示的 K 和 V，再处理它自己的报销问题。",
          "id": "S21.1",
          "estimatedSeconds": 11
        },
        {
          "label": "指出可留给后续请求的缓存",
          "narration": "A 答完以后，这段前缀缓存还能按策略留给后面的请求，空间紧张时也可能被淘汰。",
          "focus": [
            "$[data-prefix-cached]"
          ],
          "id": "S21.5",
          "frame": 1,
          "estimatedSeconds": 11
        },
        {
          "label": "让 B 接上已经存好的前缀",
          "narration": "B 到来时，如果前缀 Token 和相关配置都匹配，隔离规则也允许，它就能接上已经算好的 KV。",
          "id": "S21.2",
          "estimatedSeconds": 13
        },
        {
          "label": "突出 B 的不同后缀",
          "narration": "后面问订票的那一段跟 A 不同，模型还要处理这段新的输入。",
          "focus": [
            "$[data-suffix-owner=\"B\"]"
          ],
          "id": "S21.6",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "在命中路径上标出前缀读取",
          "narration": "看 B 的前半段，命中后直接读取已有 KV，就省掉了这一段的重算。",
          "phase": [
            800,
            1920
          ],
          "id": "S21.3",
          "estimatedSeconds": 10
        },
        {
          "label": "在命中路径上标出后缀 Prefill",
          "narration": "后半段还是要做 Prefill，处理完这段输入以后，模型才能照常生成答案。",
          "phase": [
            3200,
            3540
          ],
          "id": "S21.7",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 80,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S22",
      "chapter": 4,
      "title": "量化与推理优化",
      "subtitle": "量化可减少部分数据的存储和搬运开销",
      "kind": "quantization",
      "targetSeconds": 55,
      "terms": [
        "Quantization",
        "Model Parallelism",
        "KV Cache",
        "PagedAttention",
        "FlashAttention"
      ],
      "sources": [
        "quant",
        "flash",
        "paged"
      ],
      "steps": [
        {
          "label": "展示浮点原值的十六位编码",
          "narration": "量化可以从一个权重看起，这个例子的原值是零点七一八七五，用十六位浮点数保存。",
          "phase": [
            0,
            600
          ],
          "id": "S22.0",
          "estimatedSeconds": 11
        },
        {
          "label": "揭示四位的量化编码",
          "narration": "换成四位整数编码以后，这里只存一个七，单个值要存和要传的位数就少了。",
          "phase": [
            600,
            885
          ],
          "id": "S22.4",
          "frame": 0,
          "estimatedSeconds": 10
        },
        {
          "label": "用整数和尺度恢复近似值",
          "narration": "把整数七乘以尺度零点一，得到的近似值是零点七，和原值有一点偏差。",
          "phase": [
            800,
            1180
          ],
          "id": "S22.1",
          "estimatedSeconds": 9
        },
        {
          "label": "定位量化后要验证的条件",
          "narration": "做完量化要拿实际任务检查回答质量，再测延迟和吞吐，因为硬件和实现也会影响结果。",
          "focus": [
            "质量 · 硬件支持 · 内核实现 · 转换开销"
          ],
          "id": "S22.5",
          "frame": 1,
          "estimatedSeconds": 11
        },
        {
          "label": "显示多张卡协作运行模型",
          "narration": "量化可以和模型并行一起用，比如先降低权重占用，再让两张卡分担计算和状态。",
          "id": "S22.2",
          "estimatedSeconds": 10
        },
        {
          "label": "对照两种手段各自改变的对象",
          "narration": "左边改的是数值表示，右边改的是工作和状态放在哪张卡上，实际显存还得把缓存和临时数据算进去。",
          "focus": [
            "FP16",
            "INT4",
            "GPU 0",
            "GPU 1"
          ],
          "id": "S22.6",
          "frame": 2,
          "estimatedSeconds": 12
        },
        {
          "label": "将历史复用和块管理对应起来",
          "narration": "回头看这些工具，KV Cache 保留历史状态，PagedAttention 负责管理存这些状态的块。",
          "focus": [
            "KV Cache",
            "PagedAttention"
          ],
          "id": "S22.3",
          "estimatedSeconds": 10
        },
        {
          "label": "定位前缀重复时的优化位置",
          "narration": "如果不同请求老是带着同一段提示，可以先看看前缀缓存能否命中。",
          "focus": [
            "Prefix Caching"
          ],
          "id": "S22.7",
          "frame": 3,
          "estimatedSeconds": 9
        },
        {
          "label": "定位注意力中间读写的优化位置",
          "narration": "如果耗时主要花在注意力中间结果的读写上，可以检查 FlashAttention 这类实现。",
          "focus": [
            "FlashAttention"
          ],
          "id": "S22.8",
          "frame": 3,
          "estimatedSeconds": 10
        },
        {
          "label": "定位权重显存的优化位置",
          "narration": "如果显存主要被权重占了，可以评估权重量化，具体还要看框架和设备支持什么。",
          "focus": [
            "Quantization"
          ],
          "id": "S22.9",
          "frame": 3,
          "estimatedSeconds": 10
        }
      ],
      "estimatedSeconds": 102,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S23",
      "chapter": 5,
      "title": "应用怎样调用模型服务",
      "subtitle": "服务接收 API 请求，安排推理并返回结果",
      "kind": "api",
      "targetSeconds": 65,
      "terms": [
        "API",
        "Model Serving",
        "Streaming Output"
      ],
      "sources": [
        "vllm",
        "metrics"
      ],
      "steps": [
        {
          "label": "跟踪一次 POST 请求从客户端进入服务",
          "narration": "应用通过 API，也就是应用编程接口，把“什么是人工智能”这条消息送到模型服务。",
          "id": "S23.0",
          "estimatedSeconds": 11
        },
        {
          "label": "查看生成长度和流式开关",
          "narration": "左边还传了两个参数，一个把生成上限设为一百二十八个 Token，另一个打开流式输出。",
          "focus": [
            "$[data-api-field=\"options\"]"
          ],
          "id": "S23.4",
          "frame": 0,
          "estimatedSeconds": 11
        },
        {
          "label": "跟踪客户端收到两块文字",
          "narration": "服务安排模型执行，客户端先收到“人工智能”，接着收到“是一类”。",
          "phase": [
            0,
            2210
          ],
          "id": "S23.1",
          "estimatedSeconds": 9
        },
        {
          "label": "取消请求并停止继续生成",
          "narration": "用户点取消后，服务可以停止给这条请求安排后续计算。",
          "phase": [
            5600,
            6230
          ],
          "id": "S23.5",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "逐一归还请求占用的缓存格",
          "narration": "右边这些可以释放的缓存块就还回池里，腾出来的空间可以分给别的请求。",
          "phase": [
            6230,
            7090
          ],
          "id": "S23.6",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "观察 A 通过限流检查",
          "narration": "突然有很多请求进来时，服务可以限制接收速度，图里的 A 先通过检查，交给模型执行。",
          "phase": [
            0,
            1060
          ],
          "id": "S23.2",
          "estimatedSeconds": 12
        },
        {
          "label": "观察 B 超出限额时收到 429",
          "narration": "B 到得晚一点，限额已经用完，服务就回给它一个 HTTP 四二九响应。",
          "phase": [
            1060,
            1490
          ],
          "id": "S23.7",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "区分超时与监控",
          "narration": "超时给等待设定期限，监控则帮助我们查到这些问题发生在哪一段。",
          "focus": [
            "超时",
            "监控"
          ],
          "id": "S23.8",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "用 GET 查询可用模型",
          "narration": "有些服务的接口格式很接近，切换前可以先请求模型列表，确认要用的模型确实可用。",
          "focus": [
            "GET /v1/models"
          ],
          "id": "S23.3",
          "estimatedSeconds": 11
        },
        {
          "label": "定位切换前的检查项",
          "narration": "还要核对接口参数，再用实际请求测一测新的服务。",
          "focus": [
            "$ .p-api-final p"
          ],
          "id": "S23.9",
          "frame": 3,
          "estimatedSeconds": 7
        }
      ],
      "estimatedSeconds": 98,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S24",
      "chapter": 5,
      "title": "Docker 镜像与容器",
      "subtitle": "镜像打包应用和依赖，容器是启动后的实例",
      "kind": "docker",
      "targetSeconds": 60,
      "terms": [
        "Docker",
        "Container",
        "Container Image"
      ],
      "sources": [
        "docker"
      ],
      "steps": [
        {
          "label": "开发机启动程序并开始监听",
          "narration": "同一份程序在开发机上启动后，已经开始监听八千号端口。",
          "phase": [
            0,
            350
          ],
          "id": "S24.0",
          "estimatedSeconds": 8
        },
        {
          "label": "将代码送往服务器并触发缺依赖错误",
          "narration": "把这份代码放到服务器再启动，却报错说找不到 FastAPI。",
          "phase": [
            350,
            2170
          ],
          "id": "S24.4",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "定位运行环境的差异",
          "narration": "模型服务还有不少依赖，逐台安装时很容易出现这样的版本或环境差异。",
          "focus": [
            "依赖齐全",
            "No module named 'fastapi'"
          ],
          "id": "S24.5",
          "frame": 0,
          "estimatedSeconds": 9
        },
        {
          "label": "把代码、依赖和启动配置组织成镜像",
          "narration": "Docker 可以把应用代码、运行依赖和启动配置一起打包成镜像。",
          "id": "S24.1",
          "estimatedSeconds": 8
        },
        {
          "label": "定位镜像外的模型权重",
          "narration": "权重可以放进镜像，也可以从外部存储挂载或下载，具体要看大小和更新方式。",
          "focus": [
            "模型权重可外置挂载"
          ],
          "id": "S24.6",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "从同一镜像启动两个容器",
          "narration": "用同一个镜像可以启动容器 A 和容器 B，它们各自运行应用。",
          "id": "S24.2",
          "estimatedSeconds": 9
        },
        {
          "label": "定位两个实例共同依赖的宿主内核",
          "narration": "容器通常共享宿主机的内核，同时隔离自己的进程和环境，所以同一套应用容易在多台机器上重复启动。",
          "focus": [
            "共享宿主机内核"
          ],
          "id": "S24.7",
          "frame": 2,
          "estimatedSeconds": 13
        },
        {
          "label": "跟踪容器访问宿主机 GPU 的路径",
          "narration": "GPU 容器还要能访问宿主机的 GPU，宿主驱动也得和容器里的运行库兼容。",
          "id": "S24.3",
          "estimatedSeconds": 10
        },
        {
          "label": "把视角移到多个容器",
          "narration": "实例多起来以后，还得决定每个容器放在哪台机器，出故障又由谁重启。",
          "focus": [
            "容器 A",
            "容器 B"
          ],
          "id": "S24.8",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 84,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S25",
      "chapter": 5,
      "title": "Kubernetes 与 Ray 的分工",
      "subtitle": "用 Kubernetes 部署容器，用 Ray 分发程序任务",
      "kind": "orchestration",
      "targetSeconds": 75,
      "terms": [
        "Kubernetes",
        "K8s",
        "Ray",
        "Cluster",
        "Node",
        "Resource Scheduling"
      ],
      "sources": [
        "k8s",
        "ray",
        "vllm_scheduler"
      ],
      "steps": [
        {
          "label": "识别集群中的两台节点",
          "narration": "把一组节点组织起来协同工作，就成了集群，节点可以是一台机器，也可以是一个计算实例。",
          "focus": [
            "节点 0",
            "节点 1"
          ],
          "id": "S25.0",
          "estimatedSeconds": 11
        },
        {
          "label": "定位节点提供的资源",
          "narration": "模型服务要放到某个节点上运行，还要在那里获得 GPU、CPU 和内存。",
          "focus": [
            "GPU",
            "CPU / RAM"
          ],
          "id": "S25.4",
          "frame": 0,
          "estimatedSeconds": 10
        },
        {
          "label": "展示两个处于运行状态的 Pod",
          "narration": "Kubernetes 管理容器化应用，这里让它维持两个副本，每个副本跑在一个 Pod 里。",
          "phase": [
            0,
            500
          ],
          "id": "S25.1",
          "estimatedSeconds": 10
        },
        {
          "label": "让节点一上的 Pod 消失",
          "narration": "现在删掉节点一上的 Pod，右边的副本就暂时消失了。",
          "phase": [
            500,
            1320
          ],
          "id": "S25.5",
          "frame": 1,
          "estimatedSeconds": 8
        },
        {
          "label": "创建替代 Pod 并恢复两个副本",
          "narration": "控制器发现少了一个，就创建替代 Pod，资源允许时也可以把它安排到别的节点上。",
          "phase": [
            2750,
            3090
          ],
          "id": "S25.6",
          "frame": 1,
          "estimatedSeconds": 11
        },
        {
          "label": "把 Ray 任务发送到不同节点",
          "narration": "Ray 负责把程序里的工作分给不同进程，图里的任务就交给了不同节点上的 Worker。",
          "id": "S25.2",
          "estimatedSeconds": 11
        },
        {
          "label": "区分 Ray 的 Task 与 Actor",
          "narration": "一次性工作可以提交成 Task。需要保留状态时，可以交给 Actor，比如让它加载模型后反复接活。",
          "focus": [
            "Ray Worker 0",
            "Ray Worker 1"
          ],
          "id": "S25.7",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "定位 Kubernetes 给 Pod 选节点",
          "narration": "把三种调度放在一张图上。Kubernetes 给 Pod 选节点，控制器负责维持副本。",
          "focus": [
            "Kubernetes",
            "Pod → 节点"
          ],
          "id": "S25.3",
          "estimatedSeconds": 8
        },
        {
          "label": "定位 Ray 给 Task 或 Actor 分配 Worker",
          "narration": "这套部署如果用了 Ray，就由 Ray 在集群里安排 Task 和 Actor 跑在哪个 Worker 上。",
          "focus": [
            "Ray",
            "Task / Actor → Worker"
          ],
          "id": "S25.8",
          "frame": 3,
          "estimatedSeconds": 9
        },
        {
          "id": "S25.9",
          "frame": 3,
          "label": "定位引擎每轮选择请求和 Token",
          "narration": "真正到了模型执行这一步，每轮挑哪些请求、算哪些 Token，由推理引擎自己的调度器决定。",
          "estimatedSeconds": 9,
          "focus": [
            "推理引擎",
            "请求 / Token → 本轮批次"
          ]
        }
      ],
      "estimatedSeconds": 97,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S26",
      "chapter": 5,
      "title": "服务副本与模型并行",
      "subtitle": "请求可以分到多个副本，一个副本也可以跨多卡运行",
      "kind": "replicas",
      "targetSeconds": 80,
      "terms": [
        "Load Balancing",
        "Auto Scaling",
        "Model Parallelism",
        "Replica"
      ],
      "sources": [
        "k8s",
        "distributed",
        "vllm"
      ],
      "steps": [
        {
          "label": "回收开场的两个完整模型副本",
          "narration": "开头两张卡分着接请求，用的就是左边这种方案。每张卡放一份完整模型，各跑一个服务副本。",
          "focus": [
            "服务副本 1",
            "服务副本 2"
          ],
          "id": "S26.0",
          "estimatedSeconds": 9
        },
        {
          "label": "定位独立权重和缓存",
          "narration": "两个副本分别接请求，各自维护执行状态和缓存。",
          "focus": [
            "完整权重 · 独立缓存"
          ],
          "id": "S26.4",
          "frame": 0,
          "estimatedSeconds": 7
        },
        {
          "label": "让 A、B、C 走向不同副本",
          "narration": "负载均衡器把 A 和 C 发给第一个副本，把 B 发给第二个副本。",
          "id": "S26.1",
          "estimatedSeconds": 10
        },
        {
          "label": "指出请求后续使用同一份缓存",
          "narration": "一旦开始生成，请求通常留在选中的副本，这样可以接着用已经建立好的缓存。",
          "focus": [
            "请求留在选中的副本上，",
            "继续使用同一份缓存状态。"
          ],
          "id": "S26.5",
          "frame": 1,
          "estimatedSeconds": 10
        },
        {
          "label": "将同一模型分到两张 GPU",
          "narration": "右边的模型并行把同一个模型的计算或状态分到两张卡，这一组卡可以合起来做一个副本。",
          "focus": [
            "两张 GPU 执行同一模型",
            "部分参数 / 状态"
          ],
          "id": "S26.2",
          "estimatedSeconds": 11
        },
        {
          "label": "跟踪卡间交换",
          "narration": "两张卡各做一部分，需要时交换计算结果。",
          "phase": [
            0,
            1730
          ],
          "id": "S26.6",
          "frame": 2,
          "estimatedSeconds": 6
        },
        {
          "label": "对照模型内分工和副本间分流",
          "narration": "有了多组这样的副本，还可以用负载均衡器在副本之间分请求。",
          "focus": [
            "两张 GPU 执行同一模型",
            "负载均衡"
          ],
          "id": "S26.7",
          "frame": 2,
          "estimatedSeconds": 8
        },
        {
          "label": "第三个服务副本开始加载",
          "narration": "流量增加时可以加副本，新实例会先拿到资源，再加载模型。",
          "phase": [
            0,
            2450
          ],
          "id": "S26.3",
          "estimatedSeconds": 8
        },
        {
          "label": "副本就绪后接收 D",
          "narration": "加载完成并准备就绪后，新副本才开始接请求，图里的 D 这时才过来。",
          "phase": [
            2450,
            5500
          ],
          "id": "S26.8",
          "frame": 3,
          "estimatedSeconds": 10
        },
        {
          "label": "定位缩容前需要处理的副本",
          "narration": "流量降下来时可以减少副本，退出前还要处理好正在生成的请求。",
          "focus": [
            "$[data-replica=\"new\"]"
          ],
          "id": "S26.9",
          "frame": 3,
          "estimatedSeconds": 9
        }
      ],
      "estimatedSeconds": 88,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S27",
      "chapter": 5,
      "title": "推理延迟与吞吐量",
      "subtitle": "用四个输出 Token 计算 TTFT 和 TPOT",
      "kind": "metrics",
      "targetSeconds": 70,
      "terms": [
        "Latency",
        "TTFT",
        "TPOT",
        "Throughput",
        "Concurrency"
      ],
      "sources": [
        "metrics"
      ],
      "steps": [
        {
          "label": "从发送时刻走到首个 Token",
          "narration": "从客户端点发送到看到第一个 Token 的时间叫 TTFT，这个例子里等了零点八秒才看到“人工”。",
          "id": "S27.0",
          "estimatedSeconds": 12
        },
        {
          "label": "标出首 Token 前的整段等待",
          "narration": "从客户端计时，这段等待包含网络传输、排队和模型处理。",
          "focus": [
            "TTFT = 0.8 s"
          ],
          "id": "S27.4",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "逐个显示首个 Token 后的输出",
          "narration": "首个 Token 之后，时间轴上又出现了三个 Token，最后一个在一点一秒时到达。",
          "id": "S27.1",
          "estimatedSeconds": 10
        },
        {
          "label": "将后续总时间分到三个间隔",
          "narration": "第一个到最后一个共过了零点三秒，四个 Token 中间有三个输出间隔。",
          "focus": [
            "0.3 s / 3"
          ],
          "id": "S27.5",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "定位后续 Token 的平均时间",
          "narration": "所以图中的 TPOT 是平均每个后续 Token 零点一秒，记录时要写清楚用的统计方式。",
          "focus": [
            "TPOT = 0.1 s"
          ],
          "id": "S27.6",
          "frame": 1,
          "estimatedSeconds": 11
        },
        {
          "label": "标出从发送到完成的总延迟",
          "narration": "图里单个请求从发出到完成共一点一秒，这是它的总延迟。",
          "phase": [
            0,
            260
          ],
          "focus": [
            "总延迟 = 1.1 s"
          ],
          "id": "S27.2",
          "estimatedSeconds": 8
        },
        {
          "label": "统计两个请求在测量窗内的输出",
          "narration": "看整套服务时，可以另取两秒作为测量窗，A 在里面输出四个 Token，B 输出六个。",
          "phase": [
            260,
            1080
          ],
          "id": "S27.7",
          "frame": 2,
          "estimatedSeconds": 11
        },
        {
          "label": "算出每秒 Token 数",
          "narration": "十个 Token 除以两秒，得到每秒五个 Token，这个数描述服务的输出吞吐量。",
          "phase": [
            1080,
            1410
          ],
          "id": "S27.8",
          "frame": 2,
          "estimatedSeconds": 10
        },
        {
          "label": "用 A 和 B 说明并发",
          "narration": "并发数是同一时刻系统里有多少条未完成的请求。在这个示意里，A 和 B 正在执行。",
          "phase": [
            0,
            1720
          ],
          "id": "S27.3",
          "estimatedSeconds": 9
        },
        {
          "label": "为 C 揭示一段等待时间",
          "narration": "C 在这时候到达，就多了橙色的等待时间。",
          "phase": [
            1720,
            2400
          ],
          "id": "S27.9",
          "frame": 3,
          "estimatedSeconds": 7
        },
        {
          "label": "A 释放缓存后让 C 开始执行",
          "narration": "等 A 答完，腾出足够的缓存，C 才能开始算。",
          "phase": [
            4900,
            5870
          ],
          "id": "S27.10",
          "frame": 3,
          "estimatedSeconds": 7
        },
        {
          "label": "把指标交给下一页的监控案例",
          "narration": "一起算的请求多了，服务每秒可能输出更多 Token，用户也可能等得更久。接下来看同一组指标怎么帮我们找原因。",
          "focus": [
            "$[data-metric-span=\"wait\"]"
          ],
          "id": "S27.11",
          "frame": 3,
          "estimatedSeconds": 11
        }
      ],
      "estimatedSeconds": 113,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S28",
      "chapter": 5,
      "title": "推理服务的监控指标",
      "subtitle": "固定模型和请求长度，观察并发变化",
      "kind": "dashboard",
      "targetSeconds": 70,
      "terms": [
        "Concurrency",
        "TTFT",
        "TPOT",
        "Throughput",
        "GPU Utilization",
        "OOM",
        "Profiling"
      ],
      "sources": [
        "metrics",
        "cuda",
        "vllm_scheduler"
      ],
      "steps": [
        {
          "label": "收到变慢反馈并调出低负载基线",
          "narration": "有用户说，今天等半天才看到回答的开头。我们用一组模拟监控排查，先调出低负载时的记录。",
          "focus": [
            "低负载",
            "$ .p-load-state strong"
          ],
          "id": "S28.0",
          "estimatedSeconds": 10
        },
        {
          "label": "确认低负载时的 TTFT 基线",
          "narration": "低负载时，两条请求同时在系统里，队列是空的。从发出请求到看见首个 Token，花了一百八十毫秒。",
          "focus": [
            "等待队列",
            "$[data-metric=\"ttft\"]"
          ],
          "id": "S28.4",
          "frame": 0,
          "estimatedSeconds": 11
        },
        {
          "label": "把吞吐曲线推进到中负载",
          "narration": "模型、硬件和请求长度固定时，把并发调到八，模拟的总吞吐升到了每秒一百八十个 Token。",
          "id": "S28.1",
          "estimatedSeconds": 11
        },
        {
          "label": "突出中负载时的延迟变化",
          "narration": "设备同时做的工作多了，首 Token 等待和后续输出间隔都略有增加。",
          "focus": [
            "$[data-metric=\"ttft\"]",
            "$[data-metric=\"tpot\"]"
          ],
          "id": "S28.5",
          "frame": 1,
          "estimatedSeconds": 9
        },
        {
          "label": "把吞吐曲线推进到高负载",
          "narration": "并发继续加到二十四，模拟吞吐只升到二百零五，曲线已经趋平。",
          "id": "S28.2",
          "estimatedSeconds": 9
        },
        {
          "label": "对照高负载 TTFT 和八条等待请求",
          "narration": "现在有八条请求在排队。首 Token 延迟从一百八十毫秒升到了一千三百毫秒。",
          "focus": [
            "等待队列",
            "$[data-queue-slot][data-occupied=\"true\"]",
            "$[data-metric=\"ttft\"]"
          ],
          "id": "S28.6",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "查看高负载下的显存占用",
          "narration": "显存占用到了百分之九十四。这个数字值得追查，下一步先把那一千三百毫秒拆开。",
          "focus": [
            "$[data-memory-percent=\"94\"]",
            "94%"
          ],
          "id": "S28.7",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "从 TTFT 拆出 950 毫秒排队",
          "narration": "一千三百毫秒里，有九百五十毫秒在排队。要缩短这段等待，先查请求为什么进不去。",
          "phase": [
            0,
            1200
          ],
          "id": "S28.3",
          "estimatedSeconds": 10
        },
        {
          "label": "核对 KV 缓存余量和每轮 Token 预算",
          "narration": "先看还能不能给新请求分 KV 块，再看每轮 Token 预算是不是已经用满。单看总显存占用，分不出是哪条限制卡住了。",
          "id": "S28.8",
          "frame": 3,
          "estimatedSeconds": 11,
          "phase": [
            1200,
            2350
          ]
        },
        {
          "label": "区分控制流量、增加副本和分析执行",
          "narration": "如果是流量太大，可以限流来控制队列，或者加副本分担请求。确认剩下的执行时间也偏长，再用性能分析去找慢的内核。",
          "id": "S28.9",
          "frame": 3,
          "estimatedSeconds": 13,
          "phase": [
            2350,
            3600
          ]
        }
      ],
      "estimatedSeconds": 102,
      "transition": "读完后按 Space，进入下一页第一句。"
    },
    {
      "id": "S29",
      "chapter": 6,
      "title": "一次推理请求的完整流程",
      "subtitle": "从请求排队到答案返回，回看算力、缓存与服务的分工",
      "kind": "journey",
      "targetSeconds": 90,
      "terms": [
        "API",
        "Scheduler",
        "Prefill",
        "KV Cache",
        "Decode",
        "CUDA",
        "Model Serving"
      ],
      "sources": [
        "vllm",
        "cache",
        "cuda",
        "k8s"
      ],
      "steps": [
        {
          "label": "认出开头的第 05 条晚餐请求",
          "narration": "回到开头的第五条请求。「推荐一道晚餐」比前四条晚看到回答。现在可以沿着它找原因。",
          "phase": [
            0,
            350
          ],
          "focus": [
            "推荐一道晚餐"
          ],
          "id": "S29.0",
          "estimatedSeconds": 9
        },
        {
          "label": "沿 API 路径验证输入和权限",
          "narration": "消息先送到 API，通过输入和权限检查后才能继续往里走。",
          "phase": [
            350,
            2130
          ],
          "id": "S29.4",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "前四条用满缓存预算，第 05 条等待",
          "narration": "请求到达时，前四条已经占满了这次可用的缓存预算。第五条得先留在队列里。",
          "phase": [
            2130,
            4280
          ],
          "id": "S29.5",
          "frame": 0,
          "estimatedSeconds": 8
        },
        {
          "label": "缓存释放后让第 05 条离开队列",
          "narration": "第一条答完，归还了足够的缓存。调度器这才把第五条从队列交给 GPU。",
          "phase": [
            0,
            2320
          ],
          "id": "S29.1",
          "estimatedSeconds": 8
        },
        {
          "label": "沿用第 05 条的四段输入",
          "narration": "它的输入在这张示意图里切成四个 Token。",
          "phase": [
            2320,
            3130
          ],
          "id": "S29.6",
          "frame": 1,
          "estimatedSeconds": 5
        },
        {
          "label": "运行 Prefill 并写入四份 KV",
          "narration": "GPU 先做 Prefill，处理这四个输入位置，把它们的 KV 留给后续生成。",
          "phase": [
            3130,
            7420
          ],
          "id": "S29.7",
          "frame": 1,
          "estimatedSeconds": 7
        },
        {
          "label": "产生首个输出",
          "narration": "处理完输入，模型采样出回答的第一个 Token，「推荐」。",
          "phase": [
            7420,
            9530
          ],
          "id": "S29.8",
          "frame": 1,
          "estimatedSeconds": 6
        },
        {
          "label": "读取已有缓存并追加新位置",
          "narration": "进入 Decode 后，模型先读已有的 KV，处理一个新位置就再写入一份。",
          "phase": [
            0,
            3540
          ],
          "id": "S29.2",
          "estimatedSeconds": 10
        },
        {
          "label": "先把菜名送回客户端",
          "narration": "聊天窗口先收到了推荐的菜，西红柿炒蛋。",
          "phase": [
            3540,
            5470
          ],
          "id": "S29.9",
          "frame": 2,
          "estimatedSeconds": 6
        },
        {
          "label": "接着把做法送回客户端",
          "narration": "后面的内容继续生成，接着送回来的是这道菜的做法。",
          "phase": [
            6600,
            8760
          ],
          "id": "S29.10",
          "frame": 2,
          "estimatedSeconds": 7
        },
        {
          "label": "请求结束后归还缓存格",
          "narration": "等这条请求答完，右边没被保留的缓存就还给池子，留给后来的请求。",
          "phase": [
            12300,
            12860
          ],
          "id": "S29.11",
          "frame": 2,
          "estimatedSeconds": 9
        },
        {
          "label": "跟踪上线前的参数交付",
          "narration": "把视角拉远，这条请求到达之前，模型已经训练好，部署好的副本也已经加载了参数。",
          "phase": [
            0,
            3500
          ],
          "id": "S29.3",
          "estimatedSeconds": 11
        },
        {
          "label": "跟踪第 05 条经过接口和调度",
          "narration": "第五条沿橙线进来，在接口后面的队列多等了一段，之后才到 GPU 处理输入。",
          "phase": [
            3500,
            7700
          ],
          "id": "S29.12",
          "frame": 3,
          "estimatedSeconds": 7
        },
        {
          "label": "跟踪 Decode 读取缓存",
          "narration": "开始生成之后，Decode 每轮读缓存，算下一个 Token。",
          "phase": [
            7700,
            10000
          ],
          "id": "S29.13",
          "frame": 3,
          "estimatedSeconds": 6
        },
        {
          "label": "跟踪绿色回复路径",
          "narration": "有了可以显示的文字，服务就沿绿线送回聊天窗口。",
          "phase": [
            10000,
            13600
          ],
          "id": "S29.14",
          "frame": 3,
          "estimatedSeconds": 5
        },
        {
          "label": "回答第五条为何晚收到首字",
          "narration": "第五条晚开始回答，多等的时间在队列里。两张卡各跑一份模型时，多出来的缓存预算让它一到就能开始算。",
          "id": "S29.15",
          "frame": 3,
          "estimatedSeconds": 10,
          "phase": [
            13600,
            14650
          ]
        }
      ],
      "estimatedSeconds": 122,
      "transition": "读完后结束录制。",
      "demo": {
        "id": "05",
        "question": "推荐一道晚餐",
        "reply": [
          "推荐做西红柿炒蛋。",
          "先炒鸡蛋，再炒西红柿，最后合炒。"
        ],
        "inputTokens": [
          "推荐",
          "一",
          "道",
          "晚餐"
        ]
      }
    }
  ]
};
