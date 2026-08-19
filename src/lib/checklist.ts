import type { Policy } from './types';

interface CheckItem {
  label: string;
  desc: string;
}

interface ChecklistResult {
  documents: CheckItem[];
  steps: CheckItem[];
}

export function generateChecklist(p: Policy): ChecklistResult {
  const documents: CheckItem[] = [];
  const steps: CheckItem[] = [];

  // Always required
  documents.push({
    label: '신분증',
    desc: '주민등록증 또는 운전면허증',
  });

  // Income condition
  if (p.income_pct != null) {
    documents.push({
      label: '소득증명원',
      desc: '건강보험료 납부확인서 또는 소득금액증명원',
    });
  }

  // Housing condition
  if (p.housing_req === '무주택') {
    documents.push({
      label: '무주택확인서',
      desc: '주택소유 여부 확인서, 정부24에서 발급',
    });
  }

  // Region-specific (not nationwide)
  if (p.regions && p.regions.length > 0 && !p.regions.includes('전국')) {
    documents.push({
      label: '주민등록등본',
      desc: '거주지 확인용, 정부24에서 발급',
    });
  }

  // Employment type documents
  if (p.employment && p.employment.length > 0) {
    if (p.employment.includes('재직')) {
      documents.push({
        label: '재직증명서',
        desc: '회사에서 발급',
      });
    }
    if (p.employment.includes('미취업')) {
      documents.push({
        label: '구직등록확인서',
        desc: '워크넷에서 발급',
      });
    }
    if (p.employment.includes('재학')) {
      documents.push({
        label: '재학증명서',
        desc: '학교 홈페이지에서 발급',
      });
    }
  }

  // Age verification
  if (p.min_age != null || p.max_age != null) {
    documents.push({
      label: '주민등록초본',
      desc: '연령 확인용, 필요 시',
    });
  }

  // Education field
  if (p.education) {
    documents.push({
      label: '졸업증명서 또는 재학증명서',
      desc: '학력 확인용',
    });
  }

  // Marriage/family field
  if (p.marriage) {
    documents.push({
      label: '가족관계증명서',
      desc: '혼인 및 가족 관계 확인용',
    });
  }

  // Steps — always the same base flow
  steps.push({
    label: '자격 확인',
    desc: '지원 대상 조건을 꼼꼼히 확인하세요',
  });

  steps.push({
    label: '서류 준비',
    desc: '위 필요 서류를 미리 준비하세요. 대부분 정부24(gov.kr)에서 발급 가능합니다',
  });

  steps.push({
    label: '신청',
    desc: p.how_to_apply ?? '공식 사이트에서 온라인 신청',
  });

  if (p.apply_end) {
    const formatted = p.apply_end.replace(/-/g, '.');
    steps.push({
      label: '마감일 확인',
      desc: `신청 마감일: ${formatted}. 마감 직전에는 접속이 몰릴 수 있으니 미리 신청하세요`,
    });
  }

  return { documents, steps };
}
